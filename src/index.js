import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'

const App = () => {
    return (
        <div className="Main">
            <Header></Header>
            <div>asdasd</div>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))