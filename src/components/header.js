import React from 'react'

const getYear = () => {
    const date = new Date();
    return date.getFullYear();
}

const Header = () => {
    return <h1>The date is {getYear()}</h1>
}

export default Header;