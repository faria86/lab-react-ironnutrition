import React, { Component } from "react";
import "./App.scss";
import meals from "./meals.json";
import Meal from "./components/MealBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: "",
      searchQuery: "",
      meals: [...meals],
    };
  }

  handleInputChange = (event) => {
    const $domNode = event.target;
    const value = $domNode.value;
    const name = $domNode.name;

    this.setState({
      [name]: value,
    });

    console.log(this.state.searchQuery);

  };

  handleFormSubmission = (event) => {
    event.preventDefault();

    const name = this.state.name;
    const image = this.state.image;
    const calories = this.state.calories;
    const quantity = this.state.quantity;

    this.setState({
      meals: [...this.state.meals, { name, image, calories, quantity }],
      name: "",
      calories: "",
      image: "",
      quantity: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <label>Name</label>
          <input
            name='name'
            type='text'
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder='Name of your meal...'
            required
          />
          <label>Image</label>
          <input
            name='image'
            type='text'
            value={this.state.image}
            onChange={this.handleInputChange}
            placeholder='Your image...'
            required
          />
          <label>Quantity</label>
          <input
            name='quantity'
            type='text'
            value={this.state.quantity}
            onChange={this.handleInputChange}
            placeholder='Quantity...'
            required
          />
          <label>Calories</label>
          <input
            name='calories'
            type='text'
            value={this.state.calories}
            onChange={this.handleInputChange}
            placeholder='Calories...'
            required
          />
          <button>Submmit Meal</button>
        </form>
        <div>
          <input
            name='searchQuery'
            type='text'
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
            placeholder='Search...'
          />
        </div>
        {this.state.meals
          .filter((meal) => meal.name.toUpperCase().includes(this.state.searchQuery.toUpperCase()))
          .map((meals, index, originalArray) => {
            return (
              <Meal
                name={meals.name}
                image={meals.image}
                calories={meals.calories}
                quantity={meals.quantity}
              />
            );
          })}
      </div>
    );
  }
}

export default App;
