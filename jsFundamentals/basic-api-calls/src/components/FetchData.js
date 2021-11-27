import React from 'react';
import {AiFillInfoCircle} from 'react-icons/ai';
import '../App.css';

export default class FetchData extends React.Component {
    state = {
        loading: true,
        person: null
    }
    handleClick(e) {
        this.setState({
            
        })

    }
    render(){
        return (
        <div>
           <h1> hello </h1>
        </div>
        ) 
    };
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
                     <img className='user-photo' src={this.state.person.picture.large} alt={this.state.person.picture.large}/>
                     </div>
                     </div>
                 <div className='user-name'>{this.state.person.login.username}
                 <div>{this.state.person.name.first}</div>
                 </div>
        
               <div className='about-user'>
               <div>
                  <button onClick={this.handleClick}> <AiFillInfoCircle /> </button>
                  </div>
                        
             </div>
             </div>


        )}
    </div>
    );
}
}
