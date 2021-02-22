import PropTypes from 'prop-types';

WorkItem.propTypes = {
    title: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.any,
}
export default function WorkItem({
    title,
    duration,
    description,
    image,
}){
    return (
        <div class="work-item">
            <img 
                class="work-images" 
                src={image}
            />
            <div class="work-item-title">
                {title}<br/>
                {duration}<br/>
            </div>
            <div class="work-item-description">{description}</div>
        </div>
    )
}