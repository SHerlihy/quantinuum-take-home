import { useState } from "react"

export default function CatImage({ urlImgMed, urlImgSmall }: { urlImgMed: string, urlImgSmall: string }) {
    const [imgLoaded, setLoaded] = useState(false)
    return (
        <div
            className={`
bg-no-repeat
bg-cover
`}

            style={{
                backgroundImage: `url(${urlImgSmall})`,
                filter: `blur(${imgLoaded ? "0" : "12px"})`
            }}
        >
            <img
                src={urlImgMed}

                onLoad={() => {
                    setLoaded(true)
                }}
                style={{ opacity: `${imgLoaded ? "1" : "0"}` }}
            />
        </div>
    )
}

