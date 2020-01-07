import React from 'react';
import  '../style/style.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchValue: ''}
        this.onInputChanged = this.onInputChanged.bind(this);
        this.onFormSubmited = this.onFormSubmited.bind(this);
    }

    onInputChanged(event){
        console.log("text input changed to: " + event.target.value);
        this.setState({searchValue: event.target.value});
    }

    onFormSubmited(event) {
        event.preventDefault();
        console.log("form submitted by value of " + this.state.searchValue);
        this.props.onSubmit(this.state.searchValue);
    }

    //overright
    render() {
        return (
            <div className="ui segment bg-black white-border">
                <form className="ui form" onSubmit={this.onFormSubmited}>
                    <div className="field" id="white-color">
                        <label className="white-color">Image Search</label>
                        <input type="text" value={this.state.searchValue} onChange={this.onInputChanged} className="dark-input"/>
                    </div>
                    <button type="submit" className="ui vertical animated button main-color center-horizontal-relative full-width" tabIndex="0">
                        <div className="hidden content" id="color-black">search</div>
                        <div className="visible content">
                            <i className="search icon" id="color-black"></i>
                        </div>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;