import React from 'react';

export default class FetchData extends React.Component {
    state = {
        loading: true,
        pokemon: null
    }
    
async componentDidMount(){
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({pokemon: data.results[0], loading: false });
        console.log(data);
    }

    render() {
    return (
    <div>
        {this.state.loading || !this.state.pokemon ? (
            <div>loading...</div>
        ) : ( 
             <div>
                 <div>{this.state.pokemon.name}</div>
                 <div>
                 <img src={this.state.pokemon.name.sprites} alt={this.state.pokemon.name}/>
             </div>
             </div>
        )}
    </div>
    );
}
}