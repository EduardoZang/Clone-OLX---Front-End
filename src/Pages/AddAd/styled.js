import styled from "styled-components";

export const PageArea = styled.div`
    form{
        background-color: #FFF;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999; 

        .area{
            display: flex;
            align-items: center;
            padding: 10px;
            max-width: 500px;
            .area--title{
                width: 200px;
                text-align: right;
                padding-right: 20px;
                font-weight: bold;
                font-size: 14px;
            }

            .area--select{
                border: 1px solid black;
                border-radius: 5px;
                padding: 5px;
                box-shadow: 3px 4px 2px #7286D3;
                cursor: pointer;
                &:hover{
                    transition: 0.4s;
                    background-color: #FF7F3F;
                }
            }
            .area--input{
                flex: 1;
                input, select, textarea{
                    width: 100%;
                    font-size: 14px;
                    padding: 5px;
                    border: 1px solid black;
                    outline: 0;
                    border-radius: 5px;
                    padding: 5px;
                    box-shadow: 3px 4px 2px #7286D3;
                    cursor: pointer;

                    &:focus{
                        border: 1px solid #333;
                        color: #333;
                        transition: all ease 0.4s;
                    }
                }

                textarea{
                    height: 150px;
                    resize: none;
                }

                button{
                    background-color:#0089FF;
                    border: 0;
                    outline: 0;
                    padding: 5px 10px;
                    border-radius: 4px;
                    color: #FFF;
                    font-size: 15px;
                    cursor: pointer;
 
                    &:hover{
                        background-color: #006FCE;
                        transition: 0.6s;
                    }
                }
            }
        }
    }

@media (max-width: 600px){

form{
    .area{
        flex-direction: column;

        .area--title{
            width: 100%;
            text-align: left;
            margin-bottom: 10px;
        }

        .area--input{
            width: 100%;

            input,select,textarea{
                width: 92%;
            }
 
            button{
                width: 92%;
                padding: 10px;
            }
        }
        
    }
}
}
`;