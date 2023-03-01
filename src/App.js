
import React, { Component } from 'react'
import Card from './Component/Card'
import UnameArray from './Component/UnameArray';
import {uname} from './Component/userName'
import SearchField from './Component/SearchField'
import Scroll from './Component/Scroll'
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       uname: [],
       searchField:''
    }
  }

    componentDidMount(){
      // console.log("DidMount")
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=>response.json())
      .then(
        user=>this.setState({  uname: user  })
      )
      // this.setState({
      //   uname:uname
      // })
    }

  OnsearchChange = (e)=>{
  this.setState({searchField: e.target.value})
  // console.log(e)
  }
  render(){
    const filterUser= this.state.uname.filter((user)=>{
      return user.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    if(this.state.uname.length===0){
      return <h2>Loading Data</h2>
    }
    else{
  return (
    <div className="App tc">
      <h2 style={{color:"white"}}>Welcome to ROBO-Friends App</h2>
      <SearchField searchChange={this.OnsearchChange}/>
      <Scroll>
     <UnameArray uname={filterUser}/>
     </Scroll>
    </div>
  )
  }
}
}

export default App;
