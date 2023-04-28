import styled from "styled-components";

export const DivComp = styled.div`
    background-color:var(--gray);
    width:85%;
    max-width:30rem;
    height:22rem;
    padding: 1rem;
    color: var(--gray-900);
    display: flex;
    flex-direction:column;

    .close-modal-div{
        display: flex;
        width: 100%;
        justify-content:end;

    }
    h2{
        font-size:1.5rem; 
        text-align:center;
        margin: auto 0;
    }
    .dismiss-button{
        background-color:var(--primary-green) ;
        color: var(--white);
        padding: .7rem;
        border:none;
        font-weight:bold;
    }
`