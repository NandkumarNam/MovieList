import React from 'react';
import {Link} from 'react-router-dom'

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            moviesList: []
        };
    }

    componentDidMount() {
        fetch("https://backend-ygzsyibiue.now.sh/api/v1/movies/")
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    moviesList: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
    }

    render() {
        const { error, isLoaded, moviesList } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container">
                    <div className="row">
                        {moviesList.map(list => (
                        <div key={list._id} className="col-lg-3">
                            <img src={list.posterURL} alt={this.title}/>
                            <Link to={"/:"+list.slug}>
                            <p>{list.title}</p>
                            </Link>
                            <p>{list.releaseDate}</p>
                        </div>
                        
                        ))}
                        
                    </div>
                </div>
      );
        }
    }
}

export default MoviesList;