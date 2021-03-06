import React from 'react';
import request from 'superagent';


class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathName : null
        };

    }

    componentDidMount() {
        this.setState({
            pathName : (this.props.location.pathname).split("/:")
        })

        request
        .get('https://backend-ygzsyibiue.now.sh/api/v1/movies/')
        .query({ slug: this.state.pathName })
        .set('Accept', 'application/json')
        .end((err, resp) => {
            if (!err) {
            this.setState({someData: resp.text})
            }
        });
    
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <h2>{this.state.pathName}</h2>
            </div>
        );

    }
}

export default MovieDetails;