import React, { Component } from 'react';

import PizzaImg from '../components/PizzaImage/PizzaImg';

export default class Pizza extends Component {
  render() {
    return (
      <div>
        <h2>The Pizza</h2>
        <PizzaImg />
      </div>
    );
  }
}
