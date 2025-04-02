import { Button, Input } from '@cqcl/quantinuum-ui'
import { Dispatch, SetStateAction } from 'react'

export const ThoughtText = ({
    thought,
    setThought,
    submitThought
}: {
    thought: string,
    setThought: Dispatch<SetStateAction<string>>,
    submitThought: (thought: string) => void
}) => {
    const handleSubmit = () => {
        submitThought(thought)
        setThought("")
    }

    return (
        <div>
            <Input
                placeholder="I'll say it..."
                value={thought}
                onChange={(e) => setThought(e.target.value)}
            />
            <Button onClick={handleSubmit}>Say!</Button>
        </div>
    )
}

