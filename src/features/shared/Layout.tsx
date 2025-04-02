import { Button, DocsFooter, DocsHeaderLeft, DocsHeaderRight, DocsHeaderSubtitle, DocsHeaderWrapper } from "@cqcl/quantinuum-ui";
import { Cat } from 'lucide-react';
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <main>
            <DocsHeaderWrapper>
                <DocsHeaderLeft>
                    <Cat
                        className="w-[18rem] md:w-[23rem]"
                    />
                    <DocsHeaderSubtitle>The Frontend Quantum Cating Platform</DocsHeaderSubtitle>
                    <div className=" mt-4 flex flex-col max-w-[32rem] gap-3">
                    </div>
                </DocsHeaderLeft>

                <DocsHeaderRight>
                    <Button 
                        onClick={()=>alert("Meow!")}
                    >
                        Meow
                    </Button>
                </DocsHeaderRight>
            </DocsHeaderWrapper>
            {children}
            <DocsFooter />;
        </main>
    )
}
