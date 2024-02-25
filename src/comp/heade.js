import React from 'react'

const Heade = () => {
//  const num  =13; 

// let  text;
// const show  = true;
//  if(show){
//   text = 'text1';
//  }else{
//    text = 'text2';
//  }

// let text ;
// const show = true;
// if(show){
//   text = <p>text</p>
// }
// const age  = 19;
//  const arr = [
//   <li>1</li>,
//   <li>1</li>,
//   <li>1</li>,
//   <li>1</li>,
//   <li>1</li>,
//  ];

// const arr =  [];
// for(let i = 0; i <= 9; i++){
//   arr.push(<p>{i}</p>)
// }
// const isAuth = false;

// const rrr = [];
// for(let i = 0; i < 100; i++){
//   rrr.push(<p>{i}</p>)
// }

// const arr = [1,2,3,4];
// const res = arr.map(function(item){
//  return <p>{item}</p>
// })

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const res = arr.map(function(item){
//   return <p>{item}</p>
// })
//  const arr = [1,2,3,4,5]
// const res = arr.map(function(item,index){
//   return <p> key={item}</p>;
// })
// const prods = [
//   {id:1,name:'product1',cost:100},
//   {id:2,name:'product2',cost:200},
//   {id:3,name:'product3',cost:300},
// ];
// const res = prods.map(function(item){
//   return  <p> key={item.name}{item.cost}</p>
// });
const users = [
	{name: 'user1', surn: 'surn1', age: 30},
	{name: 'user2', surn: 'surn2', age: 31},
	{name: 'user3', surn: 'surn3', age: 32},
];
const res = users.map(function(item){
  return <p>key= {item.surn} {item.age} </p>
});
  return  (
    <div>
      {res}
      {/* {res} */}
      {/* {res}  */}

      {/* {arr} */}
    {/* { <p>isAuth</p>} */}
   {/* {age  } */}
   {/* return: {Math.sqrt(num)} */}
   {/* Условия */}
    </div>
    // 
    // Функции
  )
}

export default Heade
