import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {SearchArea,PageArea} from './styled';
import useAPI from '../../Healpers/OlxAPI';


import {PageContainer} from '../../components/MainComponents';
import AdItem from '../../components/Partials/AdItem';

const Page = () => {
    const api = useAPI();

    const [stateList,setStateList] = useState([]);
    const [categories,setCategories] = useState([]);
    const [adList,setAdList] = useState([]);

    useEffect(()=>{
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    },[])

    useEffect(()=>{
        const getCatories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCatories();
    },[])

    useEffect(()=>{
        const getRecenteAds = async () => {
            const json = await api.getAds({
                sort:'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecenteAds();
    },[])

    return(
    <>
        <SearchArea>

            <PageContainer>

                <div className="SearchBox">
                    <form method='GET'action='/ads'>
                        <input type="text"name='q'placeholder="O que deseja comprar?"/>
                        <select name="state">
                            {stateList.map((i,k)=>
                                <option key={k} value={i.name}>{i.name}</option>
                                )}
                        </select>

                        <button>Pesquisar</button>
                    </form>
                </div>

                <div className='CategoryList'>
                            {categories.map((i,k)=>
                            <Link key= {k} to={`/ads?cat=${i.slug}`}className='categoryItem'>
                                <img src={i.img} alt=""/>
                                <span>{i.name}</span>
                            </Link>                              
                            )}
                </div>
            </PageContainer>

        </SearchArea>


        <PageContainer>
            <PageArea>
                <h2>Anúncios Recentes</h2>
                <div className='list'>
                    {adList.map((i,k)=>
                        <AdItem key={k} data={i}/>
                    )}
                </div>
                <Link to="/ads"className='seeAllLink'>Ver todos</Link>    

                <hr/>



              OLX é uma empresa global de comércio eletrônico, sediada em Amsterdam, Países Baixos. Presente em 45 países, publicando anúncios classificados na Internet. Foi fundada em março de 2006 pelos empresários Fabrice Grinda e Alejandro Oxenford. 

            </PageArea>
        </PageContainer>
    </>
    );
   
}

export default Page;