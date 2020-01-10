import React, { Component } from 'react';
import Spinner from '../layout/Spinner';

export default class Pokemon extends Component {
  render() {
    console.log(this.props);
    const {
      name,
      order,
      sprites: { front_default: image }
    } = this.props.pokemon;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <div>
        <h4>{name}</h4>
        <p>Order: {order}</p>
        <img src={image} alt={name} />
      </div>
    );
  }
}
