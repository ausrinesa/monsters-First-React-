import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search/search.component';
import './App.css';
import { useState, useEffect } from 'react';

const App = ()=> {
   const [searchField, setSearchField] = useState('');
   // useState gives bac an array of two values: 1) value that we want to store 2) will be a setValue
   const [monsters, setMonsters] = useState([]);
   const [filteredMonsters, setFilteredMonsters] = useState('')

   //useEffect takes two arguments: 1) callback function(the code/effect that we want to happen inside our fuctional array 2) array of dependancy (state values or prop values), so that the code in 1. will only run if the dependencies are changed. This way we prevent infinate loops of rendering.

   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users)=> setMonsters(users));
   }, [])
   // in this case the dependency array is empty becaue we do not want to rerender the fech after the initial rendering. 

   useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)});
      setFilteredMonsters(newFilteredMonsters);
   },[monsters, searchField]);

   // in this case, the list of monsters is rerendering when the monsters array changes or when the search field changes.

  const onSearchChange = (event)=>{
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }

  return(
    <div className="App">
    <h1 className='title'>Monsters App React</h1>
    <SearchBox 
    onChange={onSearchChange} 
    placeholder='search monsters' 
    className='monsters-search-box' 
    />
    
    <CardList monsters={filteredMonsters} />

{/* class App extends Component {
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
      onChange={onSearchChange} 
      placeholder='search monsters' 
      className='monsters-search-box' 
      />

      {/* {filteredMonsters.map((monster)=>{
          return <h1 key={monster.id}> {monster.name} </h1>
        })
      } */}

{/* must be capital cased so that it is clear its 'human made component' */}
      {/* <CardList monsters={filteredMonsters} /> */}
      
    </div>
    );  
  }


export default App;
