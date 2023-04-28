import styled from "styled-components";

export const DivInput = styled.div`
    
    justify-content:center;
    
    .input-view-or-not{
        display:flex;
        flex-direction:row;
        align-items:center;
        border:1px solid var(--gray-200);
        input{
            border:none;
            flex:1;
            outline: none;
        }
        svg{
            font-size:1rem;
        }        
    }

        
`