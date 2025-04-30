//create a class component named - Success and show some quotes (messages) in it with h1,h2,h3 components
import React, { Component } from 'react';

class Success extends Component {
  render() {
    return (
      <div>
        <h1>Success is not final, failure is not fatal:</h1>
        <h2>It is the courage to continue that counts.</h2>
        <h3>- Winston Churchill</h3>

        <h1>The only limit to our realization of tomorrow</h1>
        <h2>is our doubts of today.</h2>
        <h3>- Franklin D. Roosevelt</h3>

        <h1>Don’t watch the clock;</h1>
        <h2>do what it does. Keep going.</h2>
        <h3>- Sam Levenson</h3>
      </div>
    );
  }
}

export default Success;
