import { Button, Input, Switch } from "@cqcl/quantinuum-ui";
import Layout from "./Layout";
import { useQuery } from "@tanstack/react-query";
import QueryKey from "./shared/queryKeys";

export default function App() {
    const { isPending, isError, data } = useQuery({
        queryKey: [QueryKey.tags],
        queryFn: () => ["tags"]
    })
    return (
        <Layout>
            {isPending && <p>pending</p>}
            {isError && <p>Error</p>}
            {!isPending && !isError && <ul>
                {data.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            }
        </Layout>
    )
}
