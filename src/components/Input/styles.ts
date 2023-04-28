import styled from "styled-components";

export const HeaderComponent = styled.header`
    height: 80px;
    display:flex;
    align-items: center;
    color: var(--gray-900);
    border-bottom: 1px solid var(--gray);
`
export const DivHeader = styled.div`
        display: flex;
        width:90%;
        margin:0 auto;
        justify-content: space-between;
        
        h1{
            font-weight: bold;
            font-size: 1.5rem;
            align-self: center;
        }
        div{
            display: flex;
            gap: 0.2rem;

            button{
                padding: 0.7rem;
                font-weight: bold;
                font-size: 1rem;
            }
        }

        @media (max-width: 768px) {
            .login{
                margin-right: -.7rem;

            }
        }    
   
`


