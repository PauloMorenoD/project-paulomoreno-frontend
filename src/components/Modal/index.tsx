import { SectionComp } from "./style";

type iModalProps = {
    children: React.ReactNode
}

export const Modal = ({ children }: iModalProps) => {
    return (
        <SectionComp>
            <>
                {children}
            </>
        </SectionComp>
    );
}
