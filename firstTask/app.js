import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const background = (
  <img 
    className="background" 
    alt="ocean" 
    src='/images/ocean.jpg' 
  />
);

var title = '';

const images = [];

for (const animal in animals) {
  console.log(animal)
  images.push(
    <img 
      key={animal} 
      className='animal' 
      alt={animal} 
      src={animals[animal].image} 
      ariaLabel={animal} 
      role='button'
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact
}

const showBackground = true

const animalFacts = (
  <div>
    <h1>
      {title === '' ? 'Click an animal for a fun fact' : title}
    </h1>
    {showBackground && background}
    <div className='animals'>
      {images}
    </div>
    <p id='fact'>
    </p>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));