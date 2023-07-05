import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createCategory } from '../../http/categoryApi';

import ModButton from '../../components/UI/button/ModButton';

const AddCategoryForm = () => {
    const [submitError, setSubmitError] = useState('')

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();

    const addCategory = async (data) => {
        await createCategory(data.category)
            .then(setSubmitError(''))
            .catch(e => setSubmitError('network error'))
    }

    return (
        <form onSubmit={handleSubmit(addCategory)}>
            <label htmlFor="category">Add category for filtering</label>
            <input type="text"
                name='category'
                placeholder='Enter a category name'
                tabIndex='1'
                {...register('category',
                    {
                        required: 'field must be filled in',
                        pattern: {
                            value: /^[A-Z]/,
                            message: 'the category name must begin with a capital letter'
                        }
                    })} />
            <div>{errors?.category && <p>{errors?.category?.message || 'error'}</p>}</div>
            <div>{submitError}</div>
            <ModButton type='submit'>Add category</ModButton>
        </form>
    )
}

export default AddCategoryForm;