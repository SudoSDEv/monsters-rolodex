import React from 'react';
import CardStyles from './card.module.css';

function card({item}) {

    console.log("Inside card");
    return (
        <div className={CardStyles.card}>
            <img src={`https://robohash.org/${item.id}?set=set2`} alt='Monster' />
            <label className={CardStyles.name}>{item.name}</label>
            <label className={CardStyles.email}>{item.email}</label>
        </div>
    );
}

export default card;