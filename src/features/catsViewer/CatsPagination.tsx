import { Route } from '@/routes'
import { Button, Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from '@cqcl/quantinuum-ui'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { Link } from '@tanstack/react-router'

function CatsPagination({nextDisabled}: {nextDisabled: boolean}) {
    const { page } = Route.useSearch()

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <Button asChild disabled={page === 1}>
                        <Link
                            from={Route.fullPath}
                            search={(prev) => ({ ...prev, page: prev.page - 1 })}
                        >
                            <ChevronLeftIcon />
                        </Link>
                    </Button>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <Button asChild disabled={nextDisabled}>
                        <Link
                            from={Route.fullPath}
                            search={(prev) => ({ ...prev, page: prev.page + 1 })}
                        >
                            <ChevronRightIcon />
                        </Link>
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default CatsPagination
