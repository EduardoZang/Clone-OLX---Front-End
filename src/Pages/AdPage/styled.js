import styled from "styled-components";

export const Fake = styled.div`
    background-color: #DDD;
    height: ${props=>props.height || 20}px;
`;

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;

  .box{
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    margin-bottom: 20px;
  }

  .boxPad{
    padding: 10px;
  }

  .leftSide{
    flex: 1;
    margin-right: 20px;

    .box{
        display: flex;

    }

    .adImage{
        width: 320px;
        height: 320px;
        margin-right: 20px;

        .each-slide-effect {
            height: 320px;

        }
    }

    .adInfo{
        flex: 1;
        .adName{
            margin-bottom: 20px;

            h2{
                margin: 0;
                margin-top: 20px;
            }

            small{
                color: #999;
            }
        }

        .adDescription{

            small{
                color: #999;
            }
        }
    }
}

  .rightSide{
    width: 240px;

    .price span{
        color: #0000FF;
        display: block;
        font-size: 27px;
        font-weight: bold;
    }

    .contato{
        background-color:#0000FF;
        color: #FFF;
        height: 30px;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin-bottom: 20px;
    }

    .createBy strong{
        display: block;
    }

    .createBy small{
        display: block;
        color: #999;
        margin-top: 10px;
    }
  }

  @media (max-width: 600px){

    &{
        flex-direction: column;
    }

    .leftSide{
        margin: 0;

        .box{
            width: 320px;
            flex-direction: column;
            margin: auto;
        }

        .adInfo{
            padding: 10px;
        }
    }

    .rightSide{
        width: auto;
        margin-top: 20px;

        .box{
            width: 320px;
            margin: auto;
        }

        .contato{
            width: 320px;
            margin: 20px auto;
        }
    }
  }
`;

export const OthersArea = styled.div`
    h2{
        font-size: 20px;
    }

    .list{
        display: flex;
        flex-wrap: wrap;

        .editar_anuncio{
            margin: auto 0;
            text-decoration: none;
            background-color: #8DCBE6;
            color: black;
            font-weight: bold;
            padding: 5px;
            display: inline-block;
            border-radius: 5px;
            cursor: pointer;
            border: 2px solid black;

            &:hover{
                background-color: #3EC70B;
                transition: 0.6s;
            }
    
        }

        .adItem{
            width: 25%;
        }
    }

@media (max-width: 600px){
    &{
        margin: 10px;

    }

    .list .adItem{
        width: 50%;
    }
}    
`;

export const BreadCunb = styled.div`
    font-size: 13px;
    margin-top: 20px;

    a{
        display: inline-block;
        margin: 0px 5px;
        text-decoration: underline;
        color: #000;
    }

@media (max-width: 600px){
    &{
        margin: 20px;
    }
}
`;