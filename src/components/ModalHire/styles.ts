import styled from "styled-components";

export const DivComp = styled.div`
    background-color:var(--white);
    width:85%;
    max-width:30rem;
    height:23rem;
    padding: 1rem;
    color: var(--gray-900);
    
    .companie-info-section{
        display: flex;
        flex-direction: column;

        .button-close-modal{        
            align-self:end;
            padding: .3rem .4rem;
        }    
        .companie-info-div{
            
            h3{
                font-weight:600;
                font-size:1.1rem;
                text-transform:capitalize;
                margin: 1rem 0;
            } 
            p{
                margin-bottom: 1rem;
            }
            
            
        }
        .hire-user-div{
            width: 100%;
            display: flex;
            flex-direction:column;
            gap: 1rem;

            select{
                padding: .7rem;
            }
            button{
                font-weight:600;
                padding: .7rem;
            }
        }
    }
    
    .users-section{
        background-color:var(--gray);
        width: 100%;
        display: flex;
        ul{
            display: flex;
            padding: .5rem;
            overflow-x:scroll;
            flex-wrap:nowrap;
            align-items:center;
            width: 100%;
            height: 10rem;
            gap: 1rem;
            color: var(--gray-900);
            
            li{
                min-width: 70%;
                height: 80%;
                background-color:var(--white);
                padding: .5rem;
                display: flex;
                flex-direction:column;
                justify-content:space-between;
                border:1px solid var(--gray-200);
                
                h3{
                    font-weight:600;
                }
                button{
                    align-self: center;
                    padding: .5rem;
                    color: var(--primary-red);
                    border:1px solid var(--primary-red);
                }
            }
            &::-webkit-scrollbar {
                display: none;
            }

        }
        .no-worker-div{
            text-align:center;
            margin-top:1rem;
            font-weight:600;
            color: var(--gray-900);
        }


    }

    @media (min-width: 768px){
        .users-section{
        background-color:var(--gray) ;
        
        ul{
            background-color:var(--white);
            display: flex;
            padding: .5rem;
            overflow-x:scroll;
            flex-wrap:nowrap;

            li{
                height: 8rem;
                width: 100%;
            }
        }
    }
    }

    

`