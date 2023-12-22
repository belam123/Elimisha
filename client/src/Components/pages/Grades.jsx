import React, { useEffect, useState } from 'react'
const apiUrl = import.meta.env.VITE_API_URL;
function Grades({studentDetails}) {
const[marks,setMarks] = useState(null)
  useEffect(() =>{
    fetch(`${apiUrl}/admins/subjects/:id`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
  },[])
  return (
    <div className="m-4 p-2">

      {studentDetails.subjects.map(((subject) =>(
        <div key={subject.id} className="w-full shadow-lg p-10">
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300" >
          <p>{subject.name.toUpperCase()}</p>
          </div>
        </div>
      )))}

    </div>
  )
}

export default Grades