import App from '@/App'
import { createFileRoute } from '@tanstack/react-router'

type AppSearch = {
    tag: string
    page: number
}

export const Route = createFileRoute('/')({
    component: App,
    validateSearch: (search: Record<string, unknown>): AppSearch => {
        return {
            tag: (search.tag as string) || "",
            page: Number(search.page ?? 1),
        }
    }
})
