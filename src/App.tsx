import DisplayCat from "./features/DisplayCat";
import Layout from "./features/shared/Layout";
import TagSearch from "./features/tagSearch/TagSearch";

export default function App() {
    return (
        <Layout>
            <DisplayCat/>
            <TagSearch />
        </Layout>
    )
}
