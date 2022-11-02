import React, { Component } from 'react';
import "./App.css";
import CardList from './CardList';
import SearchBox from "./SearchBox";


class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: [],
            searchfield: '' 
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    componentDidMount() {
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>this.setState ({robots: users}));
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        if(this.state.robots === 0){
            return <h1>Loading</h1>
        } else {
        return (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <CardList robots = {filteredRobots} />
            </div>
             )
            } 
        }     
    }

export default App;