import React, { useContext } from 'react';
import './style.css'
import { Row, Col } from '../../components/Grid';
import { OfflotContext } from '../../utils/Context/OffLotContext';


function OffLot() {
    //use offlot context
    const [offlots, setOfflot] = useContext(OfflotContext)
    return (

        <div className='offlot'>
            {offlots.map(offlot => (
                <Row>
                    <Col size='md-4'>
                        <img className='offlot-img' alt='loanervehicle' src='https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/4186005/300/200/m2/fpnw/wm0/silhouette-car-.jpg?1521987235&s=5b3db7d2b8d1893d6d47029cb71740db' />
                    </Col>
                    <Col size='md-3'>
                        <p className='offlot'>Stock#:{offlot.id}</p>
                        <p className='offlot'>Loaner: {offlot.year} {offlot.make} {offlot.model}</p>
                    </Col>
                    <Col size='md-3'>
                        <p className='offlot'>Customer: {offlot.customer}</p>
                        <p className='offlot'>Notes: {offlot.notes}</p>
                    </Col>
                    <Col size='md-2'>
                        <p className='offlot'>Days Off-Lot: 8 </p>
                    </Col>
                </Row>
            ))}
        </div>

    )
}

export default OffLot;