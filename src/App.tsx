import { useState } from "react";
import DisplayCat from "./features/displayCat/DisplayCat";
import Layout from "./features/shared/Layout";
import TagSearch from "./features/tagSearch/TagSearch";
import { ThoughtText } from "./features/displayCat/SaysText";

export default function App() {
    const [said, setSaid] = useState<string>("")
    const [thought, setThought] = useState<string>("")

    return (
        <Layout>
            <DisplayCat
                text={said}
                className="w-50 h-50"
            />
            <p>{said}</p>
            <ThoughtText thought={thought} setThought={setThought} submitThought={(says) => { setSaid(says) }} />
            <TagSearch />
        </Layout>
    )
}
