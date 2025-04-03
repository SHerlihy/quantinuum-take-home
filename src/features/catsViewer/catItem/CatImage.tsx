import { useState } from "react"

export default function CatImage({ urlImgMed, urlImgSmall, ...restProps }: React.HTMLAttributes<HTMLDivElement> & { urlImgMed: string, urlImgSmall: string }) {
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

            {...restProps}
        >
            <img
                src={urlImgMed}
                className="h-full w-full"

                onLoad={() => {
                    setLoaded(true)
                }}
                style={{ opacity: `${imgLoaded ? "1" : "0"}` }}
            />
        </div>
    )
}

