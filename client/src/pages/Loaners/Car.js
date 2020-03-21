import React, {Fragment, useContext}from 'react';
import {OfflotContext} from './../../utils/Context/OffLotContext'
import './style.css'

const Car = ({ make, model, year, transmission, miles, price, vin , available, id}) => {
    const [offlot, setOfflot] = useContext(OfflotContext);
    const sendOfflot = e => {
        e.preventDefault();
        setOfflot(prevState => [...prevState, {id: id, vin: vin, make: make, model: model, year: year, customer: 'Guest', notes: ['Vehicle at Vendor'] }])
    }

    const loanerCar = <Fragment>
    <div>
    <h3>{year} {make} {model}</h3>
    <img alt='loanervehicle' src='https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/4186005/300/200/m2/fpnw/wm0/silhouette-car-.jpg?1521987235&s=5b3db7d2b8d1893d6d47029cb71740db'/>
    <section>
        <aside>
        <p>Transmission: {transmission}</p>
        <p>Miles: {miles}</p>
        <p>Price: {price}</p>
        <p>Check for Recalls - <small>{vin}</small></p>
        </aside>
        <button className='readyOfflot' onClick={setOfflot}>Use as Loaner</button>
    </section> 
    </div>
    </Fragment>
return(
<div className='bgCars'>
    { available ? loanerCar: null}
</div>
)
}

export default Car