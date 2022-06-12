/*      
        What is Axios?

    --- Axios is used to communicate with the backend and it also supports the Promise API that is native to JS ES6. 
    --- Axios is a very popular (over 78k stars on Github) HTTP client, which allows us to make HTTP  requests from the browser. 
    --- It is a library which is used to make requests to an API, return data from the API, and then do things with that data in our React application.
*/

import React, { Component } from 'react'
import axios from 'axios';
import PokemonCard from '../pokemon/PokemonCard'

export default class List extends Component {
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon',
        pokemon: null
    };
    
    async componentDidMount() {
        const res = await axios.get(
            this.state.url);
            this.setState({pokemon: res.data['results'] })

    }
    render() {
        return (
            <React.Fragment>
            {this.state.pokemon ? (
            <div className='row'>
              {this.state.pokemon.map(pokemon => (
                  <PokemonCard 
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}/>
            ))}
            </div> ) : (
                <h1>Loading Pokemon</h1>
            )}
            </React.Fragment>
        );
    }
}
