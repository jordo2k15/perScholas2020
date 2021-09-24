import React, { Component } from 'react'
import PokemonCard from '../pokemon/PokemonCard'

export default class List extends Component {
    render() {
        return (
            <div className='row'>
               <PokemonCard />
               <PokemonCard /> 
               <PokemonCard /> 
               <PokemonCard /> 
               <PokemonCard /> 
               <PokemonCard /> 
               <PokemonCard />  
            </div>
        )
    }
}
