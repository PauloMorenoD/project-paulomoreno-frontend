import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom'
import imageBanner  from "../../assets/rectangle.png"

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

    div{
        width:90%;
        margin:0 auto;
        
    }
    .div-sectors{
        
        width:95%;
        
        select{
            width:100%;
            margin-top:1rem;
            padding: 1rem;
            text-transform:capitalize;
            outline:none;
            cursor:pointer;

            option{
                padding: .5rem;
                width:50%;
            }
        }
    }

    .div-companies{
        margin-top:1rem;
        background-color:var(--gray);
        padding: .5rem;
        border:1px solid var(--gray-200);

        h2{
                font-weight:bold;
                color:var(--gray-900);
                font-size:1.3rem;
                margin-bottom:1rem;
            }

        ul{
            display: flex;
            flex-direction:column;
            gap: 1rem;            

            li{
                display: flex;
                flex-direction:column;
                gap: .3rem;
                border: 1px solid var(--gray-200);
                border-radius: .2rem;
                padding: .3rem;
                color:var(--gray-900);
                
                h3{
                    text-transform: capitalize;
                    font-weight:bold;
                }

                p{
                    font-size: .9rem;
                }
                span{
                    font-weight: 500;
                }
            }
        }
    }

    @media (min-width:768px){
        div{
            max-width:768px
        }
        .div-sectors{
            width:98%;
        }
    } 
`

export const ButtonLogin = styled(LinkRouter)`
    text-decoration: none;
    padding: 0.7rem;
    font-weight: bold;
    font-size: 1rem;

`
