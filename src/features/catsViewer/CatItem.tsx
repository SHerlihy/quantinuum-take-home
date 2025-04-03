import { useState } from 'react'
import DisplayCat from './DisplayCat'
import { ThoughtText } from './SaysText'
import { Card } from '@cqcl/quantinuum-ui'

export default function CatItem({ id }: { id?: string }) {
    const [said, setSaid] = useState<string>("")
    const [thought, setThought] = useState<string>("")

    return (
        <Card>
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
        </Card>
    )
}
