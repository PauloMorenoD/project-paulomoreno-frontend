import { SectionComp } from "./styles";

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
