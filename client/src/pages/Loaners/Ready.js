import React, { useContext } from 'react';
import { CarContext } from './../../utils/Context/CarContext'
import './style.css'
import Car from './Car';

function Ready() {
    const [cars] = useContext(CarContext);

return(

<div className='carList'>
    {cars.map(car => (
     <Car key={car.id} make={car.make} year={car.year} model={car.model} transmission={car.transmission} miles={car.miles} price={car.price} vin={car.vin} available={car.available}/>
    ))}
</div>
)
}

export default Ready;