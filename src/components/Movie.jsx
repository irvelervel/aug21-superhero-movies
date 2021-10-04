import { Component } from 'react'

// this component will be about showing the details of the movie we pass to it as a prop

class Movie extends Component {
    // render() also fires again every time there's a change in the PROPS!
    render() {
        return (
            <h1>MOVIE DETAILS FOR {this.props.movie}</h1>
        )
    }
}

export default Movie