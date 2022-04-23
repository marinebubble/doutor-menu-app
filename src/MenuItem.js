import React, {useState} from "react";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MenuItem = ({id, title, price, image, desc}) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article key={id} className="menu-item">
            <img src={image} alt={title} className="photo"/>
            <div className="item-info">
                <header>
                <p>{title}</p>
                <h4 className="price">{readMore ? `${price}円` : ''}</h4>
                </header>
                {readMore ? desc : ''}
                <ExpandMoreIcon onClick={() => setReadMore(!readMore)}> </ExpandMoreIcon>
            </div>
        </article>
    )
}

export default MenuItem;