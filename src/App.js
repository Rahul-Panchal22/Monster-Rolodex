import React from "react"
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      ataksuki : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ ataksuki : user }))
  }
  handleChange = (e)=>{
    this.setState({ searchField : e.target.value })
  }

  render() {
    const { ataksuki, searchField } = this.state
    const filterMonsters = ataksuki.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    console.log(filterMonsters);
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder = "Search Monster" handleChange = {this.handleChange}/>        
        <CardList ataksukis = {filterMonsters}/> 
      </div>
    )
  }
}

export default App;
