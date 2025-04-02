import App from '@/App'
import { createFileRoute } from '@tanstack/react-router'

type AppSearch = {
    tag: string
}

export const Route = createFileRoute('/')({
    component: App,
    validateSearch: (search: Record<string, unknown>): AppSearch => {
        return {
            tag: (search.tag as string) || "",
        }
    }
})
