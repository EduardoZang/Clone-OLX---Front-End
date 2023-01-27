import styled from "styled-components"

export const PageNotFund = styled.div`
   .p404{
    margin: 5px 5px 25px 34.5%;
   }

    .b404{
        margin: 5px 5px 15px 42%;
        text-decoration: none;
        background-color: #F5EA5A;
        border: 2px solid: #FFEA20;
        padding: 10px;
        font-weight: bold;
        color: #FF6E31;
        border-radius: 5px;

        &:hover{
            background-color: #10A19D;
            color: white; 
            transition: 0.6s;
        }
   }
   
@media (max-width: 600px){
    .p404{
    margin: 5px 5px 25px 25%;
   }

   .b404{
    margin: 5px 5px 15px 30%;
   }

}
`;