import React, { useContext } from 'react';
import './style.css'
import Car from './Car';

function Ready({cars}) {
   

return(
<div className='carList'>
    {cars.map(car => (
        <Car key={car.id} make={car.make} year={car.year} model={car.model} transmission={car.transmission} miles={car.miles} price={car.price} vin={car.vin} />
    ))}
</div>
)
}

export default Ready;