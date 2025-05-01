//create a class component named - Success and show some quotes (messages) in it with h1,h2,h3 components

import React, { Component } from 'react';
import SuccessChild from './SuccessChild';
import SuccessStory from './SuccessStory'; // Assuming you have a SuccessStory component


class Success extends Component {
  render() {
    const name = "John Doe";
    const address = "123 Main St, Springfield, USA";

    return (
      <div>
        <h1>Success Quotes</h1>
        <h2>"Success is not final, failure is not fatal: It is the courage to continue that counts."</h2>
        <h3>- Winston Churchill</h3>

        <h2>"Don’t watch the clock; do what it does. Keep going."</h2>
        <h3>- Sam Levenson</h3>

        <h2>"The road to success and the road to failure are almost exactly the same."</h2>
        <h3>- Colin R. Davis</h3>
        <SuccessChild 
            name={name} 
            address={address} 
            story={<SuccessStory />}
            />
        
      </div>
    );
  }
}

export default Success;