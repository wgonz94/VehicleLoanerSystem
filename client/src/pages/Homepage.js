import React, { useContext } from 'react';
import Header from './../components/Header';
import Nav from './../components/Nav'
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


const renderPage = (e) => {
    
    if(page === 'Ready'){
     return <Ready cars={[cars]} setCars={setCars}/>
    } else if (page === 'OffLot') {
    return <OffLot />
    } else if (page === 'Unavailable') {
    return <Unavailable />
    } else {
     return <Signin />
    }
}



 return(
     <Container fluid>
         <Header/>
         <Nav page={page} setPage={setPage}/>
        {renderPage()}
     </Container>
 )
}

export default Homepage;