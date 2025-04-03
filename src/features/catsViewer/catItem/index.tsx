import { useState } from 'react'
import DisplayCat from './DisplayCat'
import { ThoughtText } from './SaysText'
import { Card } from '@cqcl/quantinuum-ui'

export default function CatItem({ id }: { id?: string }) {
    const [said, setSaid] = useState<string>("")
    const [thought, setThought] = useState<string>("")

    return (
        <Card>
            <DisplayCat id={id}>
                <DisplayCat.Pending />
                <DisplayCat.FetchError />
                <DisplayCat.Success text={said} className='w-50 h-50' />
            </DisplayCat>
            <ThoughtText
                thought={thought}
                setThought={setThought}
                submitThought={(says) => { setSaid(says) }}
            />
        </Card>
    )
}
