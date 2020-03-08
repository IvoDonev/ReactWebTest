import React from 'react'

const NewsListItem = ({newsItem}) => {

    return (
        <div>
            <h3>{newsItem.title}</h3>
            <hr />
            <p>{newsItem.feed}</p>
        </div>
    )

};

export default NewsListItem;