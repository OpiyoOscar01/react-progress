export const Students = () => {
  const students=[
    {id:1, name:"Alice", age:20},
    {id:2, name:"Bob", age:22},
    {id:3, name:"Charlie", age:21}
  ];
  
  return (
    <main>
      <h1>Students List</h1>
      <ul>
        {
          students.map((student)=>(
            <li key={student.id}>
              Name: {student.name}, Age: {student.age}
            </li>
          ))
        }
      </ul>
    </main>
  );
}