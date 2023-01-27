import styled from 'styled-components';

export const Item = styled.div`
    a{
        display: block;
        border: 1px solid #FFF;
        margin: 10px;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        color: #000;
        background-color: #FFF;

        &:hover{
            border: 1px solid #CCC;
            background-color: #EEE;
            transition: 0.4s;
        }

        .itemImage img{
            width: 100%;
            border-radius: 5px;
        }

        .itemName{
            font-weight: bold;
        }

     }
`;

