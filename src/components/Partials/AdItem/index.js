import React from 'react';
import {Link} from 'react-router-dom';
import {Item} from './styled';

export default (props) => {

    let price = '';

    if(props.data.priceNegotiable){
        price = "Preço negociável!";
    }
    else{
        price = `R$ ${props.data.price}`;
    }

    return(
        <Item className='adItem'>
            <Link to={`/ad/${props.data._id || props.data.id}`}>

                <div className='itemImage'>
                    {props.data.images ?
                   <img src={'http://192.168.129.122:5000/media/' + props.data.images[0]?.url} alt=''></img>
                   :
                   <img src={props.data.image.endsWith("default.jpg")? '/default.jpg': props.data.image} alt=''></img>
                    }   
                </div>
                
                <div className='itemName'>{props.data.title}</div>
                <div className='itemPrice'>{price}</div>
            </Link>
        </Item>
    );
}