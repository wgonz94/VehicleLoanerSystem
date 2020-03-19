import React, { useContext } from 'react';
import Header from './../components/Header';
import Nav from './../components/Nav'
import Ready from './../pages/Loaners/Ready';
import OffLot from './../pages/Loaners/Off-Lot';
import Unavailable from './../pages/Loaners/Unavailable';
import Signin from './../pages/Sign-In/signin';
import { Container } from './../components/Grid';
import { PageContext } from './../utils/PageContext'
import './style.css'

function Homepage() {

    // const [cars] = useContext(CarContext);
    const [page, setPage] = useContext(PageContext);


const renderPage = () => {
    
    if(page === 'Ready'){
     return <Ready />
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