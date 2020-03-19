import React, { useState, useContext } from 'react';
import { Col, Row } from '../../components/Grid';
import './style.css'
import Car from './Car';
import {CarContext} from './../../utils/CarContext'

function Ready() {
   const [cars, setCars] = useContext(CarContext)

return(
<div className='carList'>
    {cars.map(car => (
        <Car key={car.id} make={car.make} year={car.year} model={car.model} transmission={car.transmission} miles={car.miles} price={car.price} vin={car.vin} />
    ))}
</div>
)
}

export default Ready;