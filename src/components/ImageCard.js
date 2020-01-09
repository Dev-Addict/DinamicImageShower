import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.postRef = React.createRef();
        this.imageRef = React.createRef();
        this.setSpans = this.setSpans.bind(this);
        this.state = {gridRows: 1};
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans() {
        try {
            this.setState({gridRows: Math.ceil(this.postRef.current.clientHeight + 10)});
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        return(
            <div className="post-border" style={{gridRowEnd: `span ${this.state.gridRows}`}}>
                <div className="post" ref={this.postRef}>
                    <img className="image" ref={this.imageRef} src={this.props.image.urls.full} key={this.props.imageKey}/>
                    <span className="img-alt">{this.props.image.alt_description}</span>
                </div>
            </div>
        );
    }
}

export default ImageCard;