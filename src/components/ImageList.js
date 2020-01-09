import React from 'react';
import ImageCard from './ImageCard';
import  '../style/style.css';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        let key = -1;
        const images = props.imageList.map(image => {
            key++;
            return <ImageCard image={image} key={key} />;
        });
        this.state = {images:  images};
    }

    render(){
        return <div className="image-list">{this.state.images}</div>;
    }
}

export default ImageList;