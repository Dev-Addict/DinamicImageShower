import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Notice from './Notice';
import NoticeType from '../model/NoticeType';
import  '../style/style.css';

class App extends React.Component {
    isTimeToShowNotice= true;

    constructor(props){
        super();
        this.state = {searchValue: '', viewState: 'nothing to show', images: [], page: 1};
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.goToPrevPage = this.goToPrevPage.bind(this);
        this.goToNextPage = this.goToNextPage.bind(this);
    }

    async onSearchSubmit(searchValue) {
        if(searchValue != this.state.searchValue) {
            this.setState({page: 1});
        }
        this.setState({searchValue: searchValue});
        this.setState({viewState: 'loading'});
        const request = await unsplash.get('/search/photos', {
            params: {
                query: searchValue,
                per_page: 20,
                page: this.state.page
            },
        });
        this.setState({viewState: 'ready' , images: request.data.results});
        if(request.data.results.length === 0) {
            this.setState({viewState: 'nothing to show'});
        }
    }
    
    prevButton() {
        let isEnabled = this.state.page !== 1;
        return (
            <button className={`ui button ${isEnabled?'enabled':'disabled'} page-controller-button animated controller`} style={{float:"left"}} onClick={this.goToPrevPage}>
                <div className="hidden content">prev</div>
                <div className="visible content">
                    <i className="icon arrow left"></i>
                </div>
            </button>
        );
    }

    nextButton() {
        let isEnabled = this.state.images.length == 20;
        return (
            <button className={`ui button ${isEnabled?'enabled':'disabled'} page-controller-button animated`} style={{float: "right"}} onClick={this.goToNextPage}>
                <div className="hidden content">next</div>
                <div className="visible content">
                    <i className="icon arrow right"></i>
                </div>
            </button>
        );
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
                    <i style={{fontSize: '20px'}} className="close icon loading inverted blue-color"></i>
                    <i className="bottom right corner blue-color">nothing to show</i>
                </div>
            );
        } else {
            return (
                <div>
                    <ImageList imageList={this.state.images} />
                    <div className="page-controller ui">
                        {this.prevButton()}
                        <span className="page-counter">current page : {this.state.page}</span>
                        {this.nextButton()}
                    </div>
                </div>
            );
        }
    }

    notice() {
        if(this.isTimeToShowNotice) {
            this.isTimeToShowNotice = false;
            return <Notice message="api problem using iran ip" noticeType={NoticeType.YELLOW}/>
        }
    }

    goToNextPage() {
        this.setState({page: this.state.page + 1});
        this.onSearchSubmit(this.state.searchValue);
    }

    goToPrevPage() {
        this.setState({page: this.state.page - 1});
        this.onSearchSubmit(this.state.searchValue);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}} id="bg-black">
                {this.notice()}
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {this.showState()}
            </div>
        );
    }
}


export default App;