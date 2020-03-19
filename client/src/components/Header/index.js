import React, {useContext} from 'react';
import Nav from './../Nav'
import './style.css'
import { CarContext } from './../../utils/CarContext'

function Header() {
const [page] = useContext(CarContext)
    return (
        <div className='main-header'>
            <div className='logo'>
                <h2>VLS</h2>
            <Nav page={page}/>
            </div>
        </div>
    )
}

export default Header;