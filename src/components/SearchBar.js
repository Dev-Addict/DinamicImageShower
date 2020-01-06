import React from 'react';

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
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmited}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.searchValue} onChange={this.onInputChanged}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;