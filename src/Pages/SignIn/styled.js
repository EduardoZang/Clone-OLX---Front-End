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
            .area--input{
                flex: 1;
                input{
                    width: 100%;
                    font-size: 14px;
                    padding: 5px;
                   
                    border-radius: 5px;
                    outline: 0;
                    box-shadow: 3px 4px 2px #7286D3;
 
                    &:focus{
                        border: 1px solid #333;
                        color: #333;
                        transition: all ease 0.4s;
                    }
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
                    width: auto;
                    margin-left: 40%;
                    text-align: center;

                    &:hover{
                        background-color: #006FCE;
                        transition: 0.6s;
                    }
                }
            }

            .area--select{
                border: 1px solid black;
                border-radius: 5px;
                padding: 5px;
                box-shadow: 3px 4px 2px #7286D3;
                cursor: pointer;

                &:hover{
                    transition: 0.4s;
                    background-color: #FF7F3F ;
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

                input{
                    width: 92%;
                }
 
                button{
                    width: auto;
                    margin-left: 33%;
                    text-align: center;
                    padding: 15px ;
                }
            }
        }
    }
}
`;