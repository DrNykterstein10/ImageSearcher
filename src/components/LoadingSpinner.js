import React from 'react';

class LoadingSpinner extends React.Component {
    render(){
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                "Loading..."
            </div>
        </div>
    );
    }
}


export default LoadingSpinner;