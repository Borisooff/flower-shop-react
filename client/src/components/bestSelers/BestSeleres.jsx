import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import useProductsService from '../../services/useProductsService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './bestSelers.scss';

const BestSeleres = () => {

    const [bestSelers, setBestSelers] = useState([]);

    const { getBestSelers } = useProductsService();

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
                {/* {error ? <ErrorMessage /> : null} */}
            </div>
            {/* {loading ? <Spinner /> : null} */}
        </section>
    );
}

export default BestSeleres;
