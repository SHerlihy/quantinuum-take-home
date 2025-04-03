import Layout from "./features/shared/Layout";
import TagSearch from "./features/tagSearch/TagSearch";
import CatItem from "./features/displayCat/CatItem";
import { Route } from "./routes";
import CatsViewer from "./features/catsViewer";

export default function App() {
    const { tag } = Route.useSearch()

    return (
        <Layout>
            <CatsViewer />
            <TagSearch />
        </Layout>
    )
}
