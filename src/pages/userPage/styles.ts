import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`

    from{ transform: rotate(0deg)};
    
    to{ transform: rotate(360deg)};
`


export const DivComp = styled.div`
    width: 90%;
    margin: 0 auto;

    main{
        width: 100%;
        margin:0 auto;


        .user-info-section{
            border:1px solid var(--gray-200);
            padding: 1rem;
            color: var(--gray-900);
            display: flex;
            align-items: center;
            justify-content: space-between;
            h2{
                font-weight:600;
                font-size:1.5rem;
                margin-bottom:1rem;
            }
            .user-info-div{
                display:flex;
                flex-direction:column;
                gap: 1rem;
            }
        }

        .company-info-section{
            margin-top: 1rem;
            text-align: center;
            padding: 1rem;

            .user-hired-div{
                font-size: 1rem;
            }
            .span-user-not-hired{
                font-size: 1rem;
            }
        }

        .depart-users-section{
            background-color: var(--gray);
            
                ul{
                    display: flex;
                    flex-direction: column;
                    justify-content:space-between;
                    gap: 1rem;
                    padding: 2rem;
                    max-height:25rem;
                    overflow-y:scroll;

                    li{
                        background-color: var(--white);
                        padding: 1rem;
                        border:1px solid var(--primary-blue);
                        h3{
                            font-weight: bold;
                            color: var(--gray-900);
                            text-transform:capitalize;
                        }
                    }
                }
        }

        @media (min-width: 768px) {

                .user-info-section{
                    .user-info-div{
                        flex-direction:row;
                    }                
                }

                .company-info-section{
                    margin-top: 1rem;
                    text-align: center;

                    .user-hired-div{
                        font-size: 2rem;
                    }
                    .span-user-not-hired{
                        font-size: 2rem;
                    }
                }
                
                .depart-users-section{
                background-color: var(--gray);

                    ul{
                        flex-direction: row;
                        flex-wrap:wrap;
                        gap: 1rem;
                        

                        li{
                            background-color: var(--white);
                            border:1px solid var(--primary-blue);
                            width: 28%;
                            h3{
                                font-weight: bold;
                                color: var(--gray-900);
                                text-transform:capitalize;
                            }
                        }
                    }
            }

        }

        .loading-div{ 
            display: flex;
            align-items:center;
            justify-content:center;
            height: 4rem;
            width: 90%;
            margin: 0 auto;

            .loading-spinner{
                font-size:2rem;
                animation: ${loadingAnimation} 0.5s linear infinite;

            }            
        }
    }
`