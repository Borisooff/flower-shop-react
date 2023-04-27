import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import useShopService from '../../services/shopService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './bestSelers.scss';

const BestSeleres = () => {

    const [bestSelers, setBestSelers] = useState([]);

    const { loading, error, getBestSelers } = useShopService();

    useEffect(() => {
        getBestSelers(4)
            .then(res => setBestSelers(res))

    }, []);

    return (
        <section className="bestSelers">
            <div className="bestSelers__title heading">Best selers</div>
            <div className="bestSelers__inner">
                {bestSelers.map(item => {
                    const { id, ...itemProps } = item;
                    return <Card key={id} {...itemProps} />
                })}
                {loading ? <Spinner /> : null}
                {error ? <ErrorMessage /> : null}
            </div>
        </section>
    );
}

export default BestSeleres;
