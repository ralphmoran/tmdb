import React from 'react';
import Row from './row';

export default class Body extends React.Component
{
    render() {
        const movie_list = [];

		for(let i=0; i<10; i++)
			movie_list.push(<Row movie={this.props.movies[i]} key={this.props.movies[i].id}/>);

        return <tbody>{movie_list}</tbody>;
    }
}