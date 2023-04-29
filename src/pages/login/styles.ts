import styled from "styled-components";
import imageBanner from "../../assets/rectangle.png"
import { Link as LinkRouter } from 'react-router-dom'

export const DivComp = styled.div`
    .hamburguer-div{
            display:none;
        }
    svg{
        font-size:1.5rem;
    }

    @media (max-width:768px){
        .button-div{
            gap: 1rem;
            display: none;
        }
        .hamburguer-div{
            display:block;
        }

        .show{
            display:flex;
        }
        .hidden{
            display:none;
        }
    } 
`

export const Main = styled.main`
    background: url(${imageBanner}) no-repeat ;
    background-size:cover;
    background-position:center;
    width:100%;
    height: calc(100vh - 81px);
    display: flex;
    align-items: center;
    justify-content: center;

    .form-div{
        display: flex;
        flex-direction: column;
        width:90%;
        max-width: 30rem;
    }
    form{
        width:90%;
        display: flex;
        flex-direction: column;
        margin: 1rem auto;
        padding: 1rem;
        background-color:var(--gray);
        gap: 1rem;
        color:var(--gray-900);

        h2{
            font-weight:bold;
        }
        .input-view-or-not{
            flex-direction: row;
            align-items:center;
            border:1px solid var(--gray-200);
            margin-bottom: 1rem;
            input{
                border:none;
                flex:1;
                outline: none;
            }
            svg{
                font-size:1rem;
            }
        }
        div{
            display: flex;
            flex-direction: column;
        }
        label{
            font-size:.9rem;
        }
        input{
            padding:.7rem;
            margin-top:.2rem;
            border:1px solid var(--gray-200)
        }
        button{
            padding:.7rem;
            font-weight:bold;
        }
        p{
            font-size:.8rem;
            align-self: center;
        }
        span{
            font-size:.8rem;
            color:var(--primary-red);
        }
        
    }

`

export const Span = styled(LinkRouter)`
    text-decoration: none;

`
