import QueryKey from '@/shared/queryKeys'
import { useQuery } from '@tanstack/react-query'
import CatItem from '../displayCat/CatItem'

function CatsViewer() {
    const { isPending, isError, data } = useQuery({
        queryKey: [QueryKey.cats+"angry"],
        queryFn: async () => {
            const res = await fetch("https://cataas.com/api/cats?tags=angry")
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

    return (
        <section
            className='
grid-cols-2
md:grid-cols-5
'
        >
            {data.map(({ id }) => <CatItem key={id} id={id} />)}
        </section>
    )
}

export default CatsViewer
