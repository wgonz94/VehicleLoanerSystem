import React, { useState, createContext } from 'react';
// import Unavailable from '../pages/Loaners/Unavailable';

export const OfflotContext = createContext();

export const OfflotProvider = (props) => {
    const [offlots, setOfflot] = useState([
        {
            id: 125,
            vin: "5J6RE4H48BL023237",
            make: "Honda",
            model: "CR-V",
            year: "2011",
            customer: 'Steve Rogers',
            notes: ['Possible Leak, further inspection needed'],
        }
    ])

    return(
        <OfflotContext.Provider value={[offlots, setOfflot]}>{props.children}</OfflotContext.Provider>
    )
}