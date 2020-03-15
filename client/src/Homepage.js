import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav'
import Ready from './pages/Loaners/Ready';
import OffLot from './pages/Loaners/Off-Lot';
import Unavailable from './pages/Loaners/Unavailable';
import Signin from './pages/Sign-In/signin';


function Homepage() {
// Use Context to turn render page
state ={
    currentPage : 'Sign-In'
}

handlePageChange = page => {
    this.setState({ currentPage: page });
};

renderPage = (e) => {
    if(this.state.currentPage === 'Ready'){
        return <Ready />
    } else if (this.state.currentPage === 'OffLot') {
        return <OffLot />
    } else if (this.state.currentPage === 'Unavailable') {
        return <Unavailable />
    } else {
        return <Signin />
    }
}


 return(
     <div>
         <Header/>
         <Nav
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}/>
        {this.renderPage()}
     </div>
 )
}

export default Homepage;