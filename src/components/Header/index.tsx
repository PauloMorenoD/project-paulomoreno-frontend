import { DivHeader, HeaderComponent } from "./styles";

type iHeaderProps = {
    children: React.ReactNode;
}
export const Header = ({ children }: iHeaderProps) => {
    return (
        <HeaderComponent >
            <DivHeader>
                <h1>Fleury</h1>
                {children}
            </DivHeader>

        </HeaderComponent>

    );
}
