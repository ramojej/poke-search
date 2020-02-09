import React, { Component } from 'react';
import MyLoader from '../layout/myLoader';
//import Spinner from '../layout/Spinner';
import Stats from './Stats';

export default class Pokemon extends Component {
  render() {
    console.log(this.props);
    const {
      abilities,
      stats,
      types,
      name,
      height,
      weight,
      order,
      sprites: { front_default: image }
    } = this.props.pokemon;

    const { loading } = this.props;

    if (loading) return <MyLoader />;

    return (
      <div>
        <h4>{name.toUpperCase()}</h4>
        <p>Order: {order}</p>
        <img src={image} alt={name} />
        <p>
          Type:{' '}
          {types
            .map(
              ({ type }) =>
                type.name.charAt(0).toUpperCase() + type.name.slice(1)
            )
            .join(', ')}
        </p>
        <p>
          {abilities.length > 1 ? 'Abilities: ' : 'Ability: '}
          {abilities.map(({ ability }) => ability.name).join(', ')}
        </p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <Stats stats={stats} />
      </div>
    );
  }
}
