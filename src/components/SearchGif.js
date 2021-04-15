import React, {useState} from 'react';
import PropTypes from "prop-types";



const SearchGif = ({setAnimes}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 0){
            setAnimes((animes) => [inputValue, ...animes]);
            setInputValue('');
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInput}
            />
        </form>
    );

};

SearchGif.propTypes = {
    setAnimes : PropTypes.func.isRequired
}

export default SearchGif;
