export default function Numbers(){
  const numbers=[1,2,3,4,5,6]
  return <main>
    <h1>Numbers List</h1>
    <ul>
      {
        numbers.map((number,index)=>(
          <li key={index}>Number: {number}</li>
        ))
      }
    </ul>
  </main>
}