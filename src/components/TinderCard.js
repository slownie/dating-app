import TinderCard from 'react-tinder-card';
import React, {useState} from "react";

// ...

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}

export default function Test() {

}

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: '',
      url : 'https://en.wikipedia.org/wiki/Chimichanga'
    }
]);

  return (  
    <div>
      <h1>IDK If Im Doing THIS RIght</h1>
      {people.map(person => (
        <TinderCard
            className="swipe"
            key={person.name}
        >
          <div 
            style={{backgroundImage: 'url(' + require('' + people.url) + ')'}}
            className="card"
          >
            <h3>{person.name}</h3>

          </div>
        </TinderCard>
      ))}
    </div>
    ); 
}