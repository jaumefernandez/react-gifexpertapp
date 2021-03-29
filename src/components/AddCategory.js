import React, { useState } from 'react'
import PropTypes  from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            //como es una funcion de referencia hay que utilizar la asignacion como callback
            //en caso contrario debería de pasar por props el "categories"
            setCategories( cats => [inputValue, ...cats]);
            //vaciamos el inputvalue para que no vuelva hacer submit
            setInputValue('');
        }


    }

    return (

        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>

    )
}

AddCategory.protoType = {
    setCategories: PropTypes.func.isRequired
}

