import React, { Component } from 'react';
import Spinner from '../layout/Spinner';

export default class Pokemon extends Component {
  render() {
    console.log(this.props);
    const {
      abilities,
      name,
      height,
      weight,
      order,
      sprites: { front_default: image }
    } = this.props.pokemon;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <div>
        <h4>{name.toUpperCase()}</h4>
        <p>Order: {order}</p>
        <img src={image} alt={name} />
        <p>
          Abilities: {abilities.map(({ ability }) => ability.name).join(', ')}
        </p>
        {console.log(abilities)}
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
      </div>
    );
  }
}
