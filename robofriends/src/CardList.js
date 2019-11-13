import React from 'react';

import Card from './Card';
// we have access to robots in here because card uses robots
const CardList = ({robots}) => {
 return(
    <div>
    {
      robots.map(( user, i) => {
      return (<Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        />
    )
  })
}

</div>
)
}
export default CardList
