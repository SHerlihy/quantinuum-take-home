import Layout from "./Layout";
import { useQuery } from "@tanstack/react-query";
import QueryKey from "./shared/queryKeys";
import { Button, Command, CommandInput, CommandItem, CommandList } from "@cqcl/quantinuum-ui";

export default function App() {
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

    return (
        <Layout>
            {isPending && <p>pending</p>}
            {isError && <p>Error</p>}
            {!isPending && !isError && <Command>
                <CommandInput placeholder="Search tags..." />
                <CommandList>
                    {data.map((tag) => <CommandItem key={`catTag-${tag}`} >
                        <Button onClick={() => alert(tag)}>{tag}</Button>
                    </CommandItem>
                    )}
                </CommandList>
            </Command>
            }
        </Layout>
    )
}
