import React from 'react';
import {Link} from 'react-router-dom';
import { PageNotFund } from './style';

const Page = () => {
    return(
        <PageNotFund>
            <div>
             <h1 className='p404'>Página não encontrada</h1>
                <Link to="/" className='b404'>Voltar para home</Link>
            </div>
        </PageNotFund>
    );
}
export default Page;