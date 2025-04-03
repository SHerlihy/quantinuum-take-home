import { useState } from 'react'
import DisplayCat from './DisplayCat'
import { ThoughtText } from './SaysText'

export default function CatItem({ id }: { id?: string }) {
    const [said, setSaid] = useState<string>("")
    const [thought, setThought] = useState<string>("")

    return (
        <>
            <DisplayCat
                id={id}
                text={said}
                className="w-50 h-50"
            />
            <p>{said}</p>
            <ThoughtText
                thought={thought}
                setThought={setThought}
                submitThought={(says) => { setSaid(says) }}
            />
        </>
    )
}
