import QueryKey from '@/shared/queryKeys'
import { useQuery } from '@tanstack/react-query'
import { Route } from '@/routes'
import CatsPagination from './CatsPagination'
import { createContext, ReactNode, useContext } from 'react'
import CatItem from './catItem'
import { CatSchema } from '../shared/cataasSchema'

const CATS_PER_PAGE = 10

type CatsViewerContextType = {
    isError: boolean
    isPending: boolean,
    data: CatSchema[] | null
}

const CatsViewerContext = createContext<CatsViewerContextType>({
    isError: false,
    isPending: true,
    data: null
})

function CatsViewer({ children }: { children: ReactNode }) {
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

    return (
        <section>
            <CatsViewerContext.Provider value={{ isPending, isError, data }}>
                {children}
            </CatsViewerContext.Provider>
        </section>
    )
}

function FetchError() {
    const { isError } = useContext(CatsViewerContext)

    if (isError) {
        return <p>Error</p>
    }
}

CatsViewer.FetchError = FetchError

function Pending() {
    const { isPending } = useContext(CatsViewerContext)

    if (isPending) {
        return <p>Pending</p>
    }
}

CatsViewer.Pending = Pending

function Success() {
    const { data } = useContext(CatsViewerContext)

    if (!data) {
        return null
    }

    return (
        <>
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
        </>
    )
}

CatsViewer.Success = Success

export default CatsViewer
