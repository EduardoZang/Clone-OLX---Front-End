import React,{useState,useRef, useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {PageArea} from './styled';
import useAPI from '../../Healpers/OlxAPI';
import MaskedInput from 'react-text-mask';
import { createNumberMask } from 'text-mask-addons';

import {PageContainer,PageTitle,ErrorMensage} from '../../components/MainComponents';

const Page = () => {
    const api = useAPI();
    const fileFild = useRef();
    const history = useHistory();
    const {id} = useParams();
    const [adInfo,setAdInfo] = useState({});
    const [loading,setLoading] = useState(true);

    const [categories,setCategories] = useState([]);


    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

   useEffect(()=>{
        const getAdInfo = async() =>{
            const json = await api.getAd(id,true);
            setAdInfo(json);
            setLoading(false);
            
        }
        getAdInfo(id);
    },[id]);

    useEffect(()=>{
        const getCategories = async() =>{
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    },[]);

const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true); 
    setError('');
    let errors = [];

    if(!adInfo.title){
        errors.push('Sem título');
    }

    if(!adInfo.category){
        errors.push('Sem categoria');
    }
console.log(errors)
    if(errors.length === 0){
        const fData = new FormData();
        fData.append('title',adInfo.title);
        fData.append('price',adInfo.price);
        fData.append('priceneg',adInfo.priceNegotiable);
        fData.append('desc',adInfo.description);
        fData.append('category',adInfo.category._id || adInfo.category);

        if(fileFild.current.files.length > 0){

            for(let i=0;i<fileFild.current.files.length;i++){
                fData.append('img',fileFild.current.files[i]);
            }
        }

        const json = await api.updateAd(fData,adInfo.id);

        if(!json.error){
            history.push(`/ad/${adInfo.id}`);
            return;

        }else{
            setError(json.error);
        }

    } else{
        setError(errors.join("\n"));
    }

    setDisabled(false);
  
}

    const priceMask = createNumberMask({
        prefix:'R$ ',
        includeThousandsSeparator:true,
        thousandsSeparatorSymbol:'.',
        allowDecimal:true,
        decimalSymbol:','
    });

    return(
        <PageContainer>
 
            <PageTitle>Alterar Anúncio:</PageTitle>

            <PageArea>

                {error &&
                    <ErrorMensage>{error}</ErrorMensage>
                }
 
                <form onSubmit = {(e)=> handleSubmit(e)}>
                    <label className='area'>
                        <div className='area--title'>Título</div>
                        <div className='area--input'>
                            <input type = "text"
                            disabled={disabled} 
                            value={adInfo.title}
                            onChange = {e => setAdInfo({...adInfo, title: e.target.value})}
                            required
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Categoria</div>
                        <div className='area--input'>
                            <select
                                disabled={disabled}
                                value={adInfo.category?._id}
                                onChange={e=>setAdInfo({...adInfo,category: e.target.value})}
                                required
                            >
                                <option></option>
                                {categories && categories.map(i =>
                                    <option key={i._id} value={i._id}>{i.name}</option>
                                    )}
        
                            </select>
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Preço</div>
                        <div className='area--input'>
                            <MaskedInput
                                mask={priceMask}
                                placeholder = 'R$ '
                                disabled = {disabled || adInfo.priceNegotiable }
                                value={adInfo.price}
                                onChange = {e => setAdInfo({...adInfo,price: e.target.value})}
                                />
                        </div>
                    </label>
 
                    <label className='area'>
                        <div className='area--title'>Preço Negociável</div>
                        <div className='area--select'>
                            <input type="checkbox"
                                disabled = {disabled}
                                checked = {adInfo.priceNegotiable}
                                onChange ={e=>setAdInfo({...adInfo,priceNegotiable: !adInfo.priceNegotiable})}
                            ></input>
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Descrição</div>
                        <div className='area--input'>
                            <textarea
                                disabled={disabled}
                                value = {adInfo.description}
                                onChange = {e=>setAdInfo({...adInfo, description: e.target.value})}
                            >

                            </textarea>
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Imagens</div>
                        <div className='area--input'>
                           <input
                                type = "file"
                                disabled={disabled}
                                ref={fileFild}
                                multiple
                           />
                        </div>
                    </label>
 
                    <label className='area'>
                        <div className='area--title'></div>
                        <div className='area--input'>
                            <button>Alterar Anúncio</button>
                        </div>
                    </label>
                </form>

                            <button className='botao-check'>Vendido!</button>        
                            <button className='botao-excluir'>Excluir Anúncio</button>

            </PageArea>

        </PageContainer>
    );
}

export default Page;