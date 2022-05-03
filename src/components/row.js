import React from 'react';

export default class Row extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            movie: null
        }
    }
    
   render() {
        return (
            <tr>
                <td><input type="checkbox" />{this.props.movie.id}</td>
                <td>{this.props.movie.title}</td>
                <td>{this.props.movie.release_date}</td>
                <td>{this.props.movie.overview}</td>
            </tr>
        );
   }
}
