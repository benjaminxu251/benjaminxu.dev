import React from 'react';
import './Icon.css';
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
        <div className = "icon">
            <a href={link}>
                <img src={image} className="image"/>
                {text}
            </a>
        </div>
    );
}