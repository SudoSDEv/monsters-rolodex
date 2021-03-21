import "./App.css";
import React from "react";
import ListOfCards from "../src/components/list-of-cards/list-of-cards.component";
import SearchBar from "../src/components/search-bar/search-bar.component";

class App extends React.PureComponent {
  state = {
    searchField: "",
    monsters: [],
  };

  setMonster = (event) => {
    this.setState(() => {
      return { ...this.state, searchField: event.target.value };
    });
  };

  monstersToBeRendered = () => {
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toUpperCase().includes(this.state.searchField.toUpperCase())
    );
    return filteredMonsters;
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        this.setState(() => {
          return { ...this.state, monsters: json };
        })
      );
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBar placeholder='Search Monsters' handleChange={this.setMonster} />
        <ListOfCards>{this.monstersToBeRendered()}</ListOfCards>
      </div>
    );
  }
}

export default App;
