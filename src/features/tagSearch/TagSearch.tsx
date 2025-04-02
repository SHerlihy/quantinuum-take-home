import { useQuery } from "@tanstack/react-query";
import { Button, Command, CommandInput, CommandItem, CommandList } from "@cqcl/quantinuum-ui";
import QueryKey from "@/shared/queryKeys";

export default function TagSearch() {
    const { isPending, isError, data } = useQuery({
        queryKey: [QueryKey.tags],
        queryFn: async () => {
            const res = await fetch("https://cataas.com/api/tags")
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
        <Command>
            <CommandInput placeholder="Search tags..." />
            <CommandList>
                {data.map((tag) => <CommandItem key={`catTag-${tag}`} >
                    <Button onClick={() => alert(tag)}>{tag}</Button>
                </CommandItem>
                )}
            </CommandList>
        </Command>
    )
}
