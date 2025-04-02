import { useState } from "react";
import DisplayCat from "./features/displayCat/DisplayCat";
import { SaysText } from "./features/displayCat/SaysText";
import Layout from "./features/shared/Layout";
import TagSearch from "./features/tagSearch/TagSearch";

export default function App() {
    const [says, setSays] = useState<string>("")
    return (
        <Layout>
            <DisplayCat className="w-50 h-50"/>
            <SaysText says={says} setSays={setSays}  submitSays={(w)=>{console.log(w)}}/> 
            <TagSearch />
        </Layout>
    )
}
