import React from 'react';

export default class FetchData extends React.Component {
    state = {
        loading: true,
        person: null
    }
    
async componentDidMount(){
        const url = 'https://randomuser.me/api/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading: false });
        console.log(data);

    }

    render() {
    return (
    <div>
        {this.state.loading || !this.state.person ? (
            <div>loading...</div>
        ) : ( 
             <div>
                 <div><img src={this.state.person.picture.large}/></div>
                 <div>{this.state.person.name.first}</div>
                 <div>{this.state.person.name.last}</div>
             </div>
        )}
    </div>
    );
}
}
