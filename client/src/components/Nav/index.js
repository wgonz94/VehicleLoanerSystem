import React, {useContext} from 'react';
import {CarContext} from './../../utils/CarContext';
import './style.css';

function Nav({page, setPage}){
return(
    <ul className='nav nav-tabs'>
        <li className='nav-item'>
            <a href='#ready' onClick={() => setPage('Ready')}
               className={page === 'Ready' ? "nav-link active" : "nav-link"}>
            Loaner-Ready 
            </a>
        </li>
        <li className='nav-item'>
            <a href='#off-lot' onClick={() => setPage('OffLot')}
               className={page === 'OffLot' ? "nav-link active" : "nav-link"}>
            Loaner Off-Lot 
            </a>
        </li>
        <li className='nav-item'>
            <a href='#off-lot' onClick={() => setPage('Unavailable')}
               className={page === 'Unavailable' ? "nav-link active" : "nav-link"}>
            Unavailable 
            </a>
        </li>
    </ul>
)
}

export default Nav;