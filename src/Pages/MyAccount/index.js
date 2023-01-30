import React,{useState,useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {PageArea} from './styled';
import { OthersArea } from './styled';
import useAPI from '../../Healpers/OlxAPI';
import AdItem from '../../components/Partials/AdItem';

import {PageContainer,PageTitle,ErrorMensage} from '../../components/MainComponents';

const Page = () => {
    const api = useAPI();

    const [userInfo, setUserInfo] = useState([]);

    const [password,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [stateList,setStateList] = useState([]);
    const [email,setEmail] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    useEffect(() => {
        const getUserInfo = async()=>{
             const user = await api.getUserInfo();
             setUserInfo(user);
             setEmail(user.email);
        };
        getUserInfo();
     },[]);


    useEffect(() => {
       const getStates = async()=>{
            const slist = await api.getStates();
            setStateList(slist);
       }
       getStates();
    },[]);

const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError('');

    if(password !== confirmPassword){
        setError('Senhas não conferem');
        setDisabled(false);
        return;
    }

    const json = await api.updateUser({
        name: userInfo.name.length > 0 ? userInfo.name : undefined,
        state: userInfo.state.length > 0 ? userInfo.state : undefined,
        email: userInfo.email !== email ? email : undefined,
        password: password.length > 0 ? password : undefined
    });

    if(json.error){
        setError(json.error);
    }
    else{
       history.go(0);
    }
    setDisabled(false);
}

    return(
        <PageContainer>

            <PageTitle>Meu espaço</PageTitle>

            <PageArea>

                {error &&
                    <ErrorMensage>{error}</ErrorMensage>
                }

                <form onSubmit={handleSubmit}>

                <label className='box-title'>
                        <div className='subtitle'>Meus dados:</div>
                </label>

                    <label className='area'>
                        <div className='area--title'>Nome Completo</div>
                        <div className='area--input'>
                            <input type = "text"
                            disabled={disabled} 
                            value={userInfo.name}
                            onChange = {e => setUserInfo({...userInfo,name: e.target.value})}
                            required
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Estado</div>
                        <div className='area--input'>
                            <select value={stateList.find(state => state.name === userInfo.state)?._id}
                            onChange ={e=>setUserInfo({...userInfo,state: e.target.value})} 
                            required>
                                <option></option>
                                {stateList.map((state,k) =>
                                    <option key={k} value={state._id}>{state.name}</option>
                                )}
                            </select>
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>E-mail</div>
                        <div className='area--input'>
                            <input type = "email"
                            disabled={disabled} 
                            value={email}
                            onChange = {e => setEmail(e.target.value)}
                            required
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Senha</div>
                        <div className='area--input'>
                            <input type = "password"
                             disabled={disabled} 
                             value={password}
                             onChange = {e => setPassword(e.target.value)}
                             required

                             />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Confirmar Senha</div>
                        <div className='area--input'>
                            <input type = "password"
                             disabled={disabled} 
                             value={confirmPassword}
                             onChange = {(e) => setConfirmPassword(e.target.value)}
                             required
                             
                             />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'></div>
                            <button disabled={disabled}>Alterar Cadastro</button>
                    </label>

                    <label className='anuncio-box'>
                        <div className='area-anuncio'>Meus anúncios:</div>
                   </label>

                </form>

            </PageArea>
 
            <OthersArea>
                {userInfo.ads &&
                    <div className='list'>
                        {userInfo.ads.map((otherOferts,k) => 
                        <>
                        <div className="edit-anuncio">

                            <AdItem key={k} data={otherOferts._doc}/>
                                <Link to={'/edit-ads/'+otherOferts._doc._id} className='botao-link' 
                                onClick={() => ({...otherOferts._doc, category:otherOferts.catogory})}>Editar Anúncio</Link>
                        </div>
                        </>
                        ) }

                    </div>
                }

            </OthersArea>

        </PageContainer>
    );
}

export default Page;