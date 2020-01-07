import React from 'react';
import  '../style/style.css';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imageList:  props.imageList};
    }

    render(){
        return <div></div>;
    }
}

export default ImageList;