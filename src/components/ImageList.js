import React from 'react';
import  '../style/style.css';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        let key = -1;
        const images = props.imageList.map(image => {
            key++;
            return (
                <div className="post">
                    <img className="image" src={image.urls.full} key={key}/>
                    <span className="img-alt">{image.alt_description}</span>
                </div>
                
            );
        });
        this.state = {images:  images};
    }

    render(){
        return <div className="ui segment bg-black white-border">{this.state.images}</div>;
    }
}

export default ImageList;