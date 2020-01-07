import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import  '../style/style.css';

class App extends React.Component {
    constructor(props){
        super();
        this.state = {searchValue: '', viewState: 'nothing to show', images: []};
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    async onSearchSubmit(searchValue) {
        console.log("search value submitted to the app and is " + searchValue);
        this.setState({searchValue: searchValue});
        this.setState({viewState: 'loading'});
        const request = await unsplash.get('/search/photos', {
            params: {
                query: searchValue
            },
        });
        this.setState({viewState: 'ready'});
        if(request.data.results.length === 0) {
            this.setState({viewState: 'nothing to show'});
        }
        this.setState({images: request.data.results});
        console.log(request.data.results);
    }

    showState(){
        if(this.state.viewState === 'loading') {
            return (
                    <div className="ui active dimmer">
                        <div className="ui text loader massive" style={{fontSize: '14px'}}>Loading</div>
                    </div>
          );
        } else if(this.state.viewState === 'nothing to show') {
            return (
                <div className="center">
                    <i style={{fontSize: '10px'}} className="close icon loading circular inverted blue" id="color-black"></i>
                    <i className="bottom right corner blue-color" style={{color: '#3185fc'}}>nothing to show</i>
                </div>
            );
        } else {
            return <ImageList imageList={this.state.imageList}/>;
        }
    }

    //override
    render() {
        console.log(this.state);
        return (
            <div className="ui container" style={{marginTop: '10px'}} id="bg-black">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {this.showState()}
            </div>
        );
    }
}


export default App;