import styled from "styled-components";

export const DivComp = styled.div`
    background-color:var(--gray);
    width:85%;
    max-width:30rem;
    height:22rem;
    padding: 1rem;
    color: var(--gray-900);

    .title-close-modal-div{
        display: flex;
        justify-content:space-between;

        h2{
            font-weight:600;
        }
        button{
            padding: .4rem .6rem;
        }
    }    
        form{
            margin-top:1rem;
            width: 100%;   
            display: flex;
            flex-direction: column;
            justify-content:center;
            gap: 1rem;

            input,select, button{
                padding: .7rem;
            }
            .button-create{
                font-weight:600;
            }

            div{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                label{
                    font-size:.9rem;
                }
            }

    }
`