import React from 'react';
import useForm from './useForm';

function FormComponent() {
    const { formState, handleChange, handleSubmit } = useForm({
        username: '',
        email: '',
    });

    const submitForm = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;