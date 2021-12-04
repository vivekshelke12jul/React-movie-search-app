import React, {Component} from 'react'
import ReactDom from 'react-dom'
import SearchMovies from './SearchMovies'

class App extends Component {
    render(){
        return(
            <>
            <div className="container">
                <h1 className="title">React Movie Search App</h1>
                <SearchMovies/>
            </div>
            </>
        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'))
