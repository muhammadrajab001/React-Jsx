import React from 'react'

const Main = () => {
    const users = [
        {name: 'user1', surn: 'surn1', age: 30},
        {name: 'user2', surn: 'surn2', age: 31},
        {name: 'user3', surn: 'surn3', age: 32},
    ];
    const arr = users.map(function(item){
      return <p>key={item.surn} {item.age}</p>
    })
  return (
    <div>
        {arr}
    
    </div>
  )
}

export default Main
