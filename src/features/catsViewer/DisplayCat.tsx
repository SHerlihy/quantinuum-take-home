import { useQuery } from "@tanstack/react-query";
import QueryKey from "@/shared/queryKeys";
import CatImage from "./CatImage";

const ROOT_URL = "https://cataas.com/cat"

export default function DisplayCat({ id, text, ...restProps }: React.HTMLAttributes<HTMLDivElement> & { id?: string, text?: string }) {
    const { isPending, isError, data, error } = useQuery({
        queryKey: [QueryKey.cat+`${id}`],
        queryFn: async () => {
            let catUrl = ROOT_URL
            if (id) {
                catUrl += `/${id}`
            }

            const res = await fetch(catUrl, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            })

            if (!res.ok) {
                throw new Error("Response not ok")
            }

            return res.json()
        }
    })

    if (isError) {
        return <p>{error.message}</p>
    }

    if (isPending) {
        return <p>Pending</p>
    }

    const urlImgSmall = ROOT_URL + `/${data.id}` + "?type=xsmall"

    let urlImgMed = ROOT_URL + `/${data.id}`
    if (text && text!=="") {
        urlImgMed += `/says/${text}`
    }

    return (
        <CatImage urlImgSmall={urlImgSmall} urlImgMed={urlImgMed} {...restProps} />
    )
}
