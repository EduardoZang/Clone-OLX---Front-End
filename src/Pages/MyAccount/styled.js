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
             
              input, select{
                border-radius: 5px;
                padding: 5px;
                box-shadow: 3px 4px 2px #7286D3;
                
              }
            }
 
        .box-title{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: #FF7F3F;
            border-radius: 10px;

            .subtitle{
                font-size: 20px;
                font-weight: bold;
                color: #FFF7E9;
                padding: 5px;
            }
        }
 
        .anuncio-box{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: #DDDDDD;
            border-radius: 10px;

            .area-anuncio{
                font-size: 20px;
                font-weight: bold;
                color: #34B3F1;
                padding: 5px;
            }
        }
 
        button{
            margin-bottom: 5px;
            padding: 5px;
            border-radius: 10px;
            background-color: #0081C9;
            color: #FCFDF2;
            cursor: pointer;
            width: 25%;
            margin-left: 8.5%;

            &:hover{
                transition: 0.8s;
                background-color: #03C988;
                color: #1A0000;
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
        }

            input{
                width: 92%;
            }

            button{
                width: 75%;
                padding: 10px;
                margin-right: 18px;
             }
     }
  }
}

`;

export const OthersArea = styled.div`
    .list{
        
        display: flex;
        flex-wrap: wrap;

        .edit-anuncio{
            width: 33%;
            margin: 0 0 25px 0;

            .botao-link{
                text-decoration: none;
                margin-left: 32%;
                background-color: #FC7300;
                color: blue;
                border-radius: 5px;
                padding: 5px;
                font-weight: bold;

                &:hover{
                    background-color: #0081B4;
                    color: #FFFFFF;
                    transition: 0.6s;
                }
                
            }
        } 
    }
 
    @media (max-width: 600px){
        .list{
            .edit-anuncio{
                width: 90%;
                margin: 0 0 25px 17px;
                .botao-link{
                    width: 43%;
                    display: block;
                    padding: 12px;
                    margin-left: 30%;
                    margin-top: 10px;
                    
                }
            }
        }
    }    

`;