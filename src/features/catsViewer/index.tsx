import QueryKey from '@/shared/queryKeys'
import { useQuery } from '@tanstack/react-query'
import CatItem from '../displayCat/CatItem'
import { Route } from '@/routes'

function CatsViewer() {
    const { tag } = Route.useSearch()

    const { isPending, isError, data } = useQuery({
        queryKey: [QueryKey.cats+`${tag}`],
        queryFn: async () => {
            const res = await fetch(`https://cataas.com/api/cats?tags=${tag}`)
            if (!res.ok) {
                throw new Error("Response not ok")
            }

            return res.json()
        }
    })

    if (isError) {
        return <p>Error</p>
    }

    if (isPending) {
        return <p>Pending</p>
    }

    if (data.length === 0) {
        return <p>No cats found</p>
    }
console.log(data)

    return (
        <section
            className='
grid grid-cols-2
md:grid-cols-5
'
        >
            {data.map(({ id }) => <CatItem key={id} id={id} />)}
        </section>
    )
}

export default CatsViewer
