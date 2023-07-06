import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createProduct } from '../../http/productsApi';
import { fetchFilters } from '../filter/filtersSlice';
import { SHOP_ROUTE } from '../../utils/consts';

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

    const addInfo = (event) => {
        event.preventDefault()
        setInfo([...info, { title: '', description: '', id: Date.now() }])
    }
    const removeInfo = (id) => {
        setInfo(info.filter(i => i.id !== id))
    }
    const changeInfo = (key, value, id) => {
        setInfo(info.map(i => i.id === id ? { ...i, [key]: value } : i))
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
        if (category != 'None') {
            formData.append('categoryId', category)
        }
        formData.append('info', JSON.stringify(info))
        await createProduct(formData)
            .then(navigate(SHOP_ROUTE))
            .catch(e => setSubmitError(e.response.data.message))
    }

    return (
        <form onSubmit={handleSubmit(addProduct)}>
            <div className='adminpanel__title'>Add product</div>
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
                <option>None</option>
            </select>
            <div>{errors?.category && <p>{errors?.category?.message || 'error'}</p>}</div>
            <ModButton onClick={event => addInfo(event)}>
                Add info about product
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12H16" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 16V8" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </ModButton>
            {info.map(i => {
                return (
                    <div className='add__info' key={i.id}>
                        <input
                            type="text"
                            placeholder='Enter info title'
                            value={i.title}
                            onChange={event => changeInfo('title', event.target.value, i.id)} />
                        <input
                            type="text"
                            placeholder='Enter info description'
                            value={i.description}
                            onChange={event => changeInfo('description', event.target.value, i.id)} />
                        <button className='adminpanel__deletebutton' onClick={() => removeInfo(i.id)}>
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