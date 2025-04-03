import QueryKey from '@/shared/queryKeys'
import { useQuery } from '@tanstack/react-query'
import { Route } from '@/routes'
import CatsPagination from './CatsPagination'
import CatItem from './CatItem'

const CATS_PER_PAGE = 10

function CatsViewer() {
    const { tag, page } = Route.useSearch()

    const { isPending, isError, data } = useQuery({
        queryKey: [QueryKey.cats + `${tag}` + `${page}`],
        queryFn: async () => {
            const skip = `${(page - 1) * CATS_PER_PAGE}`
            const res = await fetch(`https://cataas.com/api/cats?tags=${tag}&skip=${skip}`)
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

    return (
        <section>
            {data.length < 1 && <p>No cats found</p>}
            {data.length > 0 && <div
                className='
grid grid-cols-2
md:grid-cols-5
'
            >
                {data.map(({ id }) => <CatItem key={id} id={id} />)}
            </div>
            }
            <CatsPagination nextDisabled={data.length < 10} />
        </section>
    )
}

export default CatsViewer
