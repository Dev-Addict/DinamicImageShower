import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    constructor(props){
        super();
        this.state = {searchValue: ''};
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchSubmit(searchValue) {
        console.log("search value submitted to the app and is " + searchValue);
        this.setState({searchValue: searchValue});
    }

    //override
    render() {
        return (
            <div className={"ui container"} style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;