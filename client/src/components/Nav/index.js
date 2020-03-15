import React from 'react';
import './style.css';

function Nav(props){

return(
    <ul className='nav nav-tabs'>
        <li className='nav-item'>
            <a href='#ready' onClick={() => props.handlePageChange('Ready')}
               className={props.currentPage === 'Ready' ? "nav-link active" : "nav-link"}>
            Loaner-Ready 
            </a>
        </li>
        <li className='nav-item'>
            <a href='#off-lot' onClick={() => props.handlePageChange('OffLot')}
               className={props.currentPage === 'OffLot' ? "nav-link active" : "nav-link"}>
            Loaner-Off-Lot 
            </a>
        </li>
        <li className='nav-item'>
            <a href='#off-lot' onClick={() => props.handlePageChange('Unavailable')}
               className={props.currentPage === 'Unavailable' ? "nav-link active" : "nav-link"}>
            Unavailable 
            </a>
        </li>
    </ul>
    // <div className='nav nav-pills'>
    //     <div className='nav-item loaner'>
    //        <p>Loaner List</p> 
    //     </div>
    //     <div className='nav-item offlot'>
    //        <p>Loaners Off-lot</p> 
    //     </div>
    //     <div className='nav-item unavailable'>
    //     <p>Unavailable</p>
    //     </div>
    // </div>
)
}

export default Nav;