import React from 'react';
import Header from './../components/Header';
import Ready from './../pages/Loaners/Ready';
// import OffLot from './pages/Loaners/Off-Lot';
// import Unavailable from './pages/Loaners/Unavailable';
// import Signin from './pages/Sign-In/signin';
import { Container } from './../components/Grid';
import './style.css'

function Homepage() {
// Use Context to turn render page
// state ={
//     currentPage : 'Sign-In'
// }

// handlePageChange = page => {
//     this.setState({ currentPage: page });
// };

// renderPage = (e) => {
//     if(this.state.currentPage === 'Ready'){
//         return <Ready />
//     } else if (this.state.currentPage === 'OffLot') {
//         return <OffLot />
//     } else if (this.state.currentPage === 'Unavailable') {
//         return <Unavailable />
//     } else {
//         return <Signin />
//     }
// }


 return(
     <Container fluid>
         <Header/>
       <div><p className='loanerCount'>Available Loaners : </p></div>
        <Ready />
     </Container>
 )
}

export default Homepage;