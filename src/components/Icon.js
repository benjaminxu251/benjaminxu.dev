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
        <div class="index-icon">
            <a href={link}>
                <img 
                    src={image} 
                    width="200" 
                    height="200"
                />
                <div class="icon-text">
                    {text}
                </div>
            </a>
        </div>
    );
}