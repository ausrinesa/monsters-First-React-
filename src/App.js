import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search/search.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users)=>
      this.setState(
        ()=>{
          return {monsters:users};
        }
       )
      );
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    
    this.setState(() => {
      return { searchField };
    })
  }
////^^this is an optimisation, instead of having the function inside onChange in input, in this way the method does not need to be re-initalised several times

  render(){

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
//// ^ variables initialised, so code is made more readable

    const filteredMonsters = monsters.filter((monster)=>{
             return monster.name.toLocaleLowerCase().includes(searchField);
          });

    return (
     <div className="App">
      <h1 className='title'>Monsters App React</h1>
      <SearchBox 
      onChangeHandler={onSearchChange} 
      placeholder='search monsters' 
      className='monsters-search-box' 
      />

      {/* {filteredMonsters.map((monster)=>{
          return <h1 key={monster.id}> {monster.name} </h1>
        })
      } */}

{/* must be capital cased so that it is clear its 'human made component' */}
      <CardList monsters={filteredMonsters} />
      
    </div>
    );  
  }
}

export default App;
