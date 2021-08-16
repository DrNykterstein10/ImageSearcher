import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {images : [], loading : false};

    }

    onSearchSubmit = async (term) => {
        this.setState({loading : true});
        const response = await unsplash.get('/search/photos', {
            params : {
                query : term
            },
        });

        this.setState({images : response.data.results, loading : false});
    }


    render(){
        if(this.state.loading){
            return <LoadingSpinner />;
        }

        return(
            <div className="ui container" style = {{marginTop : '20px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;