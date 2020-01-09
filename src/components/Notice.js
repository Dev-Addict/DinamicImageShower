import React from 'react';
import NoticeType from '../model/NoticeType';
import '../style/style.css';

class Notice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: props.message, noticeType: props.noticeType, shouldShow: true};
    }

    render() {
        if(this.state.shouldShow){
            return (
                    <div className={`${this.state.noticeType}-notice notice`}>
                        <div className="notice-message">{this.state.message}</div>
                        <div className="close-notice">
                            <i className="close icon" onClick={event => this.setState({shouldShow: false})}></i>
                        </div>
                    </div>
            );
        }
        return (
            <div className={`${this.state.noticeType}-notice notice hide-notice`}>
                <div className="notice-message">{this.state.message}</div>
                <div className="close-notice">
                    <i className="close icon" onClick={event => this.setState({shouldShow: false})}></i>
                </div>
            </div>
        );
    }
}

export default Notice;