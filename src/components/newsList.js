import React from 'react'

import NewsListItem from './newsListItem';

const NewsList = (props) => {

    const items = props.news.map((newsItem) => {
        return <NewsListItem key={newsItem.id} newsItem={newsItem}/>
    });

    return (
        <div>{items}</div>
    )
};

export default NewsList;