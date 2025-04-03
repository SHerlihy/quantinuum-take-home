import Layout from "./features/shared/Layout";
import TagSearch from "./features/tagSearch/TagSearch";
import CatsViewer from "./features/catsViewer";

export default function App() {
    return (
        <Layout>
            <CatsViewer>
                <CatsViewer.FetchError />
                <CatsViewer.Pending />
                <CatsViewer.Success />
            </CatsViewer>
            <TagSearch />
        </Layout>
    )
}
