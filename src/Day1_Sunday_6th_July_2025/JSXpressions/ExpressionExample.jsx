import React from 'react'

export default function ExpressionExample() {
  let x=5
  let y=15
  const p=10
  let myName = "John Doe"
  const multiply=(a,b)=>a*b;
  const greetUser=()=>`Hello, ${myName}!`;
  const greetStudent=(name)=>{
    return `Hello, ${name}!`;

  }
  const specialClass="bg-blue-500 text-white p-2 rounded";
  return (
    

    <div>The sum of {x} and {y} is {x+y} and the value of the constant is {p} and my name is {myName}
    <p>The product of the two numbers is {multiply(x,y)}</p>
    <p>{greetUser()}</p>
    <p>Greet Oscar: {greetStudent("Oscar")}</p>
    <p className={specialClass}>Hello world.</p>
    </div>
  )
}
