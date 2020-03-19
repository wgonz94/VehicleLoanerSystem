import React from 'react';
import './style.css'

const Car = ({ make, model, year, transmission, miles, price, vin }) => {

return(
<div className='bgCars'>
    <h3>{year} {make} {model}</h3>
    <img alt='loanervehicle' src='https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/4186005/300/200/m2/fpnw/wm0/silhouette-car-.jpg?1521987235&s=5b3db7d2b8d1893d6d47029cb71740db'/>
    <section>
        <aside>
        <p>Transmission: {transmission}</p>
        <p>Miles: {miles}</p>
        <p>Price: {price}</p>
        <p>Check for Recalls - <small>{vin}</small></p>
        </aside>
    </section>
</div>
)
}

export default Car