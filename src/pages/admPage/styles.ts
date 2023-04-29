import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`

    from{ transform: rotate(0deg)};
    
    to{ transform: rotate(360deg)};
`

export const DivComp = styled.div`
    .logout-button{
        padding:.5rem 1rem;
        font-weight:bold;

        &:hover{
            opacity: .9;
            transition: .4s;    
        }
    }


    main{
        width: 90%;
        margin: 1rem auto;

        .departments-select-section{
            display:flex;
            justify-content:space-between;
            
            h2{
                font-size:1.3rem;
                font-weight:600;
                color:var(--gray-900)
            }
            select{
                padding: .5rem;
                outline:none;
            }
            button{
                padding:.7rem;
                font-weight:600;
            }
        }
        .no-departments-div{
            width: 95%;
            font-weight: 600;
            color: var(--gray-900);
        }
        .departments-view-section{
            background-color:var(--gray);
            margin-top:1rem;
            padding:.5rem;
            
            ul{
                display: flex;
                justify-content:space-between;
                flex-wrap:wrap;
                margin:1rem auto;
                overflow-y: scroll;
                gap: 1rem;
                height: 500px;

                &::-webkit-scrollbar {
                    display: none;
                }

                li{
                    display: flex;
                    flex-direction: column;
                    justify-content:space-between;
                    padding: .5rem;
                    height: 8rem;
                    background-color: var(--white);
                    border-bottom: 2px solid var(--primary-blue);
                    width: 25%;
                    
                    .info-div{
                        display: flex;
                        flex-direction: column;
                        gap: .8rem;
                    }
                    
                    h3{
                        font-size:1rem;
                        font-weight:bold;
                        text-transform:capitalize;
                        color:var(--gray-900);
                    }
                    .icons-div{
                        display: flex;
                        align-items:center;
                        justify-content:center;
                        gap: 1rem;

                        svg{
                            font-size:1.5rem;
                            cursor: pointer;
                            
                        }
                        .eye{
                            color: var(--primary-blue);
                        }
                        .edit{
                            color: var(--primary-green);
                            
                        }                 
                        .delete{
                            color: var(--primary-red);
                            
                        }
                    }                       
                }
            }            
        }
        .user-section{
            background-color:var(--gray);
            margin:1rem 0;
            padding:.5rem;

            h2{
                font-size:1.3rem;
                font-weight:600;
                color:var(--gray-900);
                margin: 1rem 0;
                
            }
            ul{
                display: flex;
                justify-content:space-between;
                flex-wrap:wrap;
                margin: 1rem auto; 
                overflow-y: scroll;
                max-height: 500px;

                &::-webkit-scrollbar {
                    display: none;
                }

                li{
                    display: flex;
                    flex-direction: column;
                    justify-content:space-between;
                    padding: .5rem;
                    height: 8rem;
                    background-color: var(--white);
                    border-bottom: 2px solid var(--primary-blue);
                    width: 25%;
                    
                    .user-info-div{
                        display: flex;
                        flex-direction: column;
                        gap: .8rem;   
                        
                        h3{
                            font-weight:600;
                            color:var(--gray-900);
                        }
                    } 
                    .edit-delete-div{
                        display: flex;
                        align-items:center;
                        justify-content:center;
                        gap: 1rem;

                        svg{
                            font-size:1.5rem;
                            cursor: pointer;
                            
                        }
                        .edit{
                            color: var(--primary-green);
                            
                        }                 
                        .delete{
                            color: var(--primary-red);
                            
                        }                        
                    }
                }    
            }
        } 
        
        .loading-div{ 
            display: flex;
            align-items:center;
            justify-content:center;
            height: 100vh;
            width: 90%;
            margin: 0 auto;

            .loading-spinner{
                font-size:4rem;
                animation: ${loadingAnimation} 0.5s linear infinite;

            }            
        }

    }

    @media (max-width: 768px){
        main{
            .departments-select-section{
                flex-direction:column;
                gap:1rem;
            }
            .departments-view-section{

                ul{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    margin: 1rem auto;
                    

                    li{
                        padding: .5rem;
                        height: 8rem;
                        background-color: var(--white);
                        border-bottom: 2px solid var(--primary-blue);
                        width: 100%;
                        max-width: 100%;
                    }
                }
            }
            .no-departments-div{
                text-align:center;
            }

            .user-section{
                h2{
                    font-size:1.3rem;
                    font-weight:600;
                    color:var(--gray-900);
                    margin: 1rem 0;
                    text-align: center;                

                }
                ul{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    margin: 1rem auto;
                    overflow: scroll;
                    gap: 1rem;

                    li{
                        padding: .5rem;
                        height: 8rem;
                        background-color: var(--white);
                        border-bottom: 2px solid var(--primary-blue);
                        width: 100%;
                    }

                }
                .no-users{
                    width: 100%;
                    font-weight: 600;
                    color: var(--gray-900);    
                    text-align: center;                
                }
            }
        }
    }


`

