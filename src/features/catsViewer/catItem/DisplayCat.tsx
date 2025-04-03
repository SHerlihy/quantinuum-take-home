import { useQuery } from "@tanstack/react-query";
import QueryKey from "@/shared/queryKeys";
import CatImage from "./CatImage";
import { createContext, ReactNode, useContext } from "react";
import { CatSchema } from "@/features/shared/cataasSchema";

const ROOT_URL = "https://cataas.com/cat"

type DisplayCatContextType = {
    isPending: boolean
    isError: boolean
    data: CatSchema | null
}

const DisplayCatContext = createContext<DisplayCatContextType>({
    isPending: true,
    isError: false,
    data: null
})

function DisplayCat({ id, children }: { id?: string, children: ReactNode }) {
    const { isPending, isError, data } = useQuery({
        queryKey: [QueryKey.cat + `${id}`],
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

    return (
        <DisplayCatContext.Provider value={{ isPending, isError, data }}>
            {children}
        </DisplayCatContext.Provider>
    )
}

function FetchError() {
    const { isError } = useContext(DisplayCatContext)

    if (isError) {
        return <p>Error</p>
    }
}

DisplayCat.FetchError = FetchError

function Pending() {
    const { isPending } = useContext(DisplayCatContext)

    if (isPending) {
        return <p>Pending</p>
    }
}

DisplayCat.Pending = Pending

function Success({ text, ...restProps }: React.HTMLAttributes<HTMLDivElement> & { text: string }) {
    const { data } = useContext(DisplayCatContext)

    if (!data) {
        return null
    }

    const urlImgSmall = ROOT_URL + `/${data.id}` + "?type=xsmall"

    let urlImgMed = ROOT_URL + `/${data.id}`
    if (text && text !== "") {
        urlImgMed += `/says/${text}`
    }

    return (
        <CatImage urlImgSmall={urlImgSmall} urlImgMed={urlImgMed} {...restProps} />
    )
}

DisplayCat.Success = Success

export default DisplayCat
