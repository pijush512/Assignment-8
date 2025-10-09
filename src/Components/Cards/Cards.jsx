import React, { Suspense } from 'react';
import Card from '../Card/Card';

const Cards = () => {

    const cardsDataPromise = fetch('/CardsData.json')
        .then(res => res.json());

    return (
        
        <div>
            <Suspense fallback={<p>Looading...</p>}>
                <Card cardsDataPromise={cardsDataPromise}></Card>
            </Suspense>
        </div>
    );
};

export default Cards;