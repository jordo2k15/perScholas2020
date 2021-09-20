import React from 'react';
import '../App.css';

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
             <div className='info-card'>
                 <div>
                     <div>
                     <img className='user-photo' src={this.state.person.picture.large} />
                     </div>
                     </div>
                 <div className='user-name'>{this.state.person.name.first} {this.state.person.name.last}</div>
        
               <div className='about-user'> 
                        <h4>Country</h4>
                   <div>{this.state.person.nat}</div>
             </div>
             </div>


        )}
    </div>
    );
}
}
