import PropTypes from 'prop-types';

Header.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string,
}

export default function Header({
    link,
    text,
}){
    return(
        <div class="header">
            <link href='https://fonts.googleapis.com/css?family=Lato:400,300,100,700,900' rel='stylesheet' type='text/css'/>
            <link rel="stylesheet" type="text/css" href="main.css"/>
            <header>
                <a href={link}><h1 class="header-title">Benjamin Xu</h1></a>
                <p class="header-description">{text}</p>
            </header>
        </div>
    )
}