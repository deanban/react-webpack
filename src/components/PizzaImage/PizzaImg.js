import React from 'react';
import classes from './PizzaImg.css';
import pizzaImg from '../../assets/pizza.jpeg';

const PizzaImg = props => (
  <div className={classes.PizzaImage}>
    <img src={pizzaImg} className={classes.pizzaImg} />
  </div>
);

export default PizzaImg;
