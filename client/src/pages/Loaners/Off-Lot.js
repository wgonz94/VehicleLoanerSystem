import React from 'react';
import './style.css'
import { Row, Col } from '../../components/Grid';


function OffLot() {
//use offlot context
return(

<div className='offlot'>
    <Row>
        <Col size='md-4'>
    <img className='offlot-img' alt='loanervehicle' src='https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/4186005/300/200/m2/fpnw/wm0/silhouette-car-.jpg?1521987235&s=5b3db7d2b8d1893d6d47029cb71740db'/>
       </Col> 
       <Col size='md-3'>
        <p className='offlot'>Stk#0123456</p>
        <p className='offlot'>Loaner: 2011 Honda CR-V</p>
        </Col>
        <Col size='md-3'>
        <p className='offlot'>Customer: Steve Rogers</p>
        <p className='offlot'>Notes</p>
        </Col>
        <Col size='md-2'>
            <p className='offlot'>Days Off-Lot: </p>
        </Col>
    </Row>
    
</div>

)
}

export default OffLot;