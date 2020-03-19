import React, { useState, createContext } from 'react';

export const OfflotContext = createContext();

export const OfflotProvider = (props) => {
    const [offlot, setOfflot] = useState([
        {
            id: 125,
            vin: "5J6RE4H48BL023237",
            make: "Honda",
            model: "CR-V",
            year: "2011",
            transmission: "Automatic",
            miles: "62,330",
            price: "$16,498",
            payTransf: false,
        }
    ])

    return(
        <OfflotContext.Provider value={[offlot, setOfflot]}>{props.children}</OfflotContext.Provider>
    )
}