import React, { useContext, useEffect } from 'react';
import Header from './../components/Header';
import Ready from './../pages/Loaners/Ready';
import OffLot from './../pages/Loaners/Off-Lot';
import Unavailable from './../pages/Loaners/Unavailable';
import Signin from './../pages/Sign-In/signin';
import { Container } from './../components/Grid';
import { CarContext } from './../utils/CarContext'
import './style.css'

function Homepage() {

    const [cars, setCars] = useContext(CarContext);
    const [page, setPage] = useContext(CarContext);


useEffect(() => {
    if(page === 'Ready'){
     return <Ready />
    } else if (page === 'OffLot') {
    return <OffLot />
    } else if (page === 'Unavailable') {
    return <Unavailable />
    } else {
     return <Signin />
 }
}, [page])



 return(
     <Container fluid>
         <Header/>
            <div>
                {/* <p className='loanerCount'>Available Loaners : {cars.length}</p> */}
             </div>
        {page}
     </Container>
 )
}

export default Homepage;