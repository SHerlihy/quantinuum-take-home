import { Button, Input } from '@cqcl/quantinuum-ui'
import { Dispatch, SetStateAction } from 'react'

export const SaysText = ({
    says,
    setSays,
    submitSays
}: {
    says: string,
    setSays: Dispatch<SetStateAction<string>>,
    submitSays: (says: string) => void
}) => {
    const handleSubmit = () => {
        submitSays(says)
        setSays("")
    }

    return (
        <div>
            <Input
                placeholder="I'll say it..."
                value={says}
                onChange={(e) => setSays(e.target.value)}
            />
            <Button onClick={handleSubmit}>Say!</Button>
        </div>
    )
}

