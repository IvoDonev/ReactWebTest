import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'
import NewsList from './components/newsList'

import JSON from './db.json'

class App extends Component {

    state = {
        news : JSON
    }

    render() {
        return (
            <div className="Main">
                <Header></Header>
                <NewsList news={this.state.news}></NewsList>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))