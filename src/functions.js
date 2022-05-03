// eslint-disable-next-line
import React, { useEffect } from 'react';

export default function getMoviesFromApiAsync() {

    useEffect(() => {
        console.log('useEffect');
      });
      
    return fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c43c2bed927f5d26e0b5d4378d2b407e')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
 }