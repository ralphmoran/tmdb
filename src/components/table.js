import React from 'react';
import Body from './body';
import Paginator from './paginator'

export default class Table extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            movies: null,
            total_results: null,
            total_pages: null,
        };
    }

    async getMoviesFromApiAsync() {
        const api_call = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c43c2bed927f5d26e0b5d4378d2b407e');
        const movies = await api_call.json();

        this.setState({
            movies: movies.results,
            total_results: movies.total_results,
            total_pages: movies.total_pages,
        })
     }

    render() {
        
        if( this.state.movies == null ){
            this.getMoviesFromApiAsync();
            return;
        }

        return (
            <table className="styled-table">
                <thead>
                    <tr className="active-row">
                        <th>I own it</th>
                        <th>Title</th>
                        <th>Release date</th>
                        <th>Overview</th>
                    </tr>
                </thead>
                <Body movies={this.state.movies}/>
                <tfoot>
                    <tr>
                        <td colSpan="5"><Paginator /> Total results: {this.state.total_results} - Total pages: {this.state.total_pages}</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}