import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

import { createProduct } from '../../http/productsApi';
import { fetchFilters } from '../filter/filtersSlice';
import { MAIN_ROUTE } from '../../utils/consts';

import ModButton from '../UI/button/ModButton';


const AddProductForm = () => {
    const [submitError, setSubmitError] = useState('');
    const [info, setInfo] = useState([]);
    const { filters } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchFilters())
    }, [])

    const addInfo = (e) => {
        e.preventDefault()
        setInfo([...info, { title: '', description: '', id: Date.now() }])
    }
    const removeInfo = (id) => {
        setInfo(info.filter(info => info.id !== id))
    }
    const changeInfo = (key, value, id) => {
        setInfo(info.map(info => info.id === id ? { info, [key]: value } : info))
    }

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();

    const addProduct = async ({ title, price, img, category }) => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('price', `${price}`)
        formData.append('img', img[0])
        formData.append('categoryId', category)
        formData.append('info', JSON.stringify(info))
        await createProduct(formData)
            .then(navigate(MAIN_ROUTE))
            .catch(e => setSubmitError(e.response.data.message))
    }


    return (
        <form onSubmit={handleSubmit(addProduct)}>
            <input type="text"
                placeholder='Enter product title'
                tabIndex='2'
                {...register('title',
                    {
                        required: 'field must be filled in',
                    })}
            />
            <div>{errors?.title && <p>{errors?.title?.message || 'error'}</p>}</div>
            <input type="number"
                placeholder='Enter product price'
                tabIndex='3'
                {...register('price',
                    {
                        required: 'field must be filled in',
                    })} />
            <div>{errors?.price && <p>{errors?.price?.message || 'error'}</p>}</div>
            <input type="file"
                {...register('img',
                    {
                        required: 'field must be filled in',
                    })} />
            <div>{errors?.img && <p>{errors?.img?.message || 'error'}</p>}</div>
            <select name="category"
                {...register('category')}>
                {
                    filters.map(filter => {
                        return <option key={filter.id}
                            value={filter.id}
                        >{filter.name}</option>
                    })
                }
                {/* <option value={null}>All</option> */}
            </select>
            <div>{errors?.category && <p>{errors?.category?.message || 'error'}</p>}</div>
            <ModButton onClick={e => addInfo(e)}>Add info</ModButton>
            {info.map(i => {
                return (
                    <div className='add__info' key={i.id}>
                        <input
                            type="text"
                            placeholder='Enter title'
                            value={i.title}
                            onChange={event => changeInfo('title', event.target.value, i.id)} />
                        <input
                            type="text"
                            placeholder='Enter description'
                            value={i.description}
                            onChange={event => changeInfo('description', event.target.value, i.id)} />
                        <button onClick={() => removeInfo(i.id)}>
                            Delete info
                        </button>
                    </div>

                )
            })}
            <div>{submitError}</div>
            <ModButton type='submit'>Add product</ModButton>
        </form>
    );
}

export default AddProductForm;