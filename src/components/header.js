import React, { Component } from 'react'
import '../styles/style.css'
class Header extends Component {

    inputChangedHandler(event) {
        console.log("I was changed!! to " + event.target.value);
    }

    render() {
        return (
        <header>
            <div className="logo">Logo</div>
            <input type="text" onChange={this.inputChangedHandler}></input>
        </header>
        )
    }
}


export default Header;