import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    constructor(props){
        super();
        this.state = {searchValue: '', viewState: 'nothing to show'};
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    async onSearchSubmit(searchValue) {
        console.log("search value submitted to the app and is " + searchValue);
        this.setState({searchValue: searchValue});
        this.setState({viewState: 'loading'});
        const request = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: searchValue
            },
            headers: {
                Authorization: 'Client-ID e02654c5e77bd7b37bb0dc004ee1e6ac6dbf32c6773adffe77bf78c2c0a5a239'
            }
        });
        this.setState({viewState: 'ready'});
        if(request.data.results.length === 0) {
            this.setState({viewState: 'nothing to show'});
        }
        console.log(request.data.results);
    }

    showState(){
        if(this.state.viewState === 'loading') {
            return (
                    <div className="ui active dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
          );
        } else if(this.state.viewState === 'nothing to show') {
            return (
                <div style={{fontSize: '100px'}} className="center"> ! </div>
            );
        } else {
            return <div>ready</div>;
        }
    }

    //override
    render() {
        console.log(this.state);
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {this.showState()}
            </div>
        );
    }
}


export default App;