import { useState } from "react"

const RANDOM_CAT_URL_MED = "https://cataas.com/cat?type=medium"
const RANDOM_CAT_URL_SMALL = "https://cataas.com/cat?type=xsmall"

export default function DisplayCat() {
    const [imgLoaded, setLoaded] = useState(false)
    return (
        <div
            className={`
bg-no-repeat
bg-cover
`}

            style={{
                backgroundImage: `url(${RANDOM_CAT_URL_SMALL})`,
                filter: `blur(${imgLoaded ? "0" : "12px"})`
            }}
        >
            <img
                src={RANDOM_CAT_URL_MED}
                className="blur-none"

                onLoad={() => {
                    setTimeout(() => setLoaded(true), 3000)
                }}
                style={{ opacity: `${imgLoaded ? "1" : "0"}` }}
            />
        </div>
    )
}

