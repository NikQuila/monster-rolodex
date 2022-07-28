import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

// App component represent all the aplication
// Y functional component es lo mas utilizado hoy en día
const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [monstersFiltered, setMonstersFiltered] = useState(monsters);

  useEffect(() => {
    //primer argumento, es lo que qeueremos que pase
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []); // y la segunda wea es cuando el argumento , ese array, cambia, se corre la funcion y ya que ta vacia, nunca se hara ese llamada denuevo

  useEffect(() => {
    const newMonstersFiltered = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setMonstersFiltered(newMonstersFiltered);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  // En el return va el UI
  return (
    <div className="App">
      <h1 className="app-title"> Monster Rolodex</h1>
      <SearchBox
        className="monster-search-boxer"
        placeholder="Search Monster"
        onChange={onSearchChange}
      />
      <CardList monsters={monstersFiltered} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     // Check the state
//     this.state = {
//       monsters: [],
//       // monstersFiltered: [],
//       searchField: "",
//     };
//   }

//   // tipo start en c#
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users, monstersFiltered: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     this.setState(() => {
//       return { searchField: event.target.value };
//     });
//   };

//   render() {
//     // Guardar monstruos filtrados globalmente y poder usarlo luego
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     let monstersFiltered = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField.toLowerCase());
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title"> Monster Rolodex</h1>
//         <SearchBox
//           className="monster-search-box"
//           placeholder="Search Monster"
//           onChange={onSearchChange}
//         />
//         <CardList monsters={monstersFiltered} />
//       </div>
//     );
//   }
// }

export default App;
