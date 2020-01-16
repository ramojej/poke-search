import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchPokemon: PropTypes.func.isRequired,
    clearPokemon: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      alert('Should not be empty');
    } else {
      this.props.searchPokemon(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { showClear, clearPokemon } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="pokemon"
            placeholder="Search Pokemon"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" className="btn" />
        </form>
        {showClear && <button onClick={clearPokemon}>Clear</button>}
      </div>
    );
  }
}
