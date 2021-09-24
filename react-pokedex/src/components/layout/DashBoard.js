import React, { Component } from 'react';
import List from '../pokemon/List.js'

export default class DashBoard extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col'>
                <List />
                </div>
                
            </div>
        )
    }
}
