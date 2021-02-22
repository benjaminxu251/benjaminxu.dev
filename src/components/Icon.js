import React from 'react';
import PropTypes from 'prop-types';

Icon.propTypes = {
    link: PropTypes.string,
    image: PropTypes.any,
    text: PropTypes.string,
};

export default function Icon({
    link,
    image,
    text,
}){
    return(
        <div class="icon">
            <a href={link}>
                <img 
                    class="icon-image"
                    src={image} 
                />
                <div class="icon-text">
                    {text}
                </div>
            </a>
        </div>
    );
}