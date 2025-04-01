import { Button, Input, Switch } from "@cqcl/quantinuum-ui";
import Layout from "./Layout";

export default function App() {
    return (
        <Layout>
            <Button variant="outline">Hello</Button>
            <Input placeholder="say something"></Input>
            <Switch />
        </Layout>
    )
}
