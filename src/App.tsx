import Layout from "./features/shared/Layout";
import TagSearch from "./features/tagSearch/TagSearch";
import CatItem from "./features/displayCat/CatItem";

export default function App() {
    return (
        <Layout>
            <CatItem />
            <TagSearch />
        </Layout>
    )
}
