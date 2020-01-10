import React, { Component } from 'react';
import './App.css';
import Search from './components/pokemons/Search';
import Pokemon from './components/pokemons/Pokemon';
import axios from 'axios';

export default class App extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   try {
  //     const res = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
  //     console.log(res.data);
  //     this.setState({ loading: false });
  //   } catch (error) {
  //     console.log(error.message);
  //     this.setState({ error: error.message });
  //     this.setState({ loading: false });
  //   }
  // }

  searchPokemon = async text => {
    this.setState({ loading: true });

    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`);
      console.log(res.data);
      this.setState({ loading: false, pokemon: res.data, error: null });
    } catch (error) {
      this.setState({ error: error.message });
      this.setState({ loading: false, pokemon: null });
    }
  };

  render() {
    const { error, loading, pokemon } = this.state;

    return (
      <div className="App">
        <h2>PokeSearch</h2>
        <Search searchPokemon={this.searchPokemon} />
        {error && <h3>No Pokemon Found</h3>}
        {pokemon && <Pokemon pokemon={pokemon} loading={loading} />}
      </div>
    );
  }
}
