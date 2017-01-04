import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAL9PgEhCKsQsRT_GhPNBo_Rr5etyEBkhg';


YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});

class App extends Component{

constructor(props)
{
	super(props);
	this.state = {videos : []};

	YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		this.setState({videos});		
	});

}

	render() {
		return (
		<div>
			<SearchBar />
			<VideoList videos={this.state.videos}/>
		</div>
		); // jsx turns to vanilla javascript and html
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));
