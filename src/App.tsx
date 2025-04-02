import DisplayCat from "./features/displayCat/DisplayCat";
import Layout from "./features/shared/Layout";
import TagSearch from "./features/tagSearch/TagSearch";

export default function App() {
    return (
        <Layout>
            <DisplayCat className="w-50 h-50"/>
            <TagSearch />
        </Layout>
    )
}
