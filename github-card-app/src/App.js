import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  state={
    name:'',
    profile:'',
    username:'',
    bio:'',
  }

  fetchUser =()=>{
    axios.get(`https://api.github.com/users/${username}`)
      .then(resp =>{
        console.log(resp)
        this.setState({

        })
      })
  }

  componentDidMount(){
    this.fetchUser('intent-ly');
  }

  handleChange(e){
    e.preventDefault();
    this.fetchUser(this.state.username)
    this.setState({username:''})
  }

  render(){
    return(
      <div className='App'>
        <h1>GitHub Card Project</h1>
        <form onSubmit={handleSearch}>
          <input 
          value ={this.state.username} 
          onChange={this.handleChange} 
          type ='text'/>
          <button>Search User</button>
        </form>
        <div className='card'>

        </div>
      </div>
    )
  }

}

export default App;
