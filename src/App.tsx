import Layout from "./features/shared/Layout";
import TagSearch from "./features/tagSearch/TagSearch";
import CatItem from "./features/displayCat/CatItem";
import { Route } from "./routes";

export default function App() {
    const { tag } = Route.useSearch()

    return (
        <Layout>
            <p>{tag}</p>
            <CatItem />
            <TagSearch />
        </Layout>
    )
}
