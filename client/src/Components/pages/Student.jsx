import React, { useEffect, useState } from 'react'
const apiUrl = import.meta.env.VITE_API_URL;

function Student({isLoggedIn}) {
    const [fetchStudent,setFetchStuednt] = useState(null)

    useEffect(() =>{
        fetch(`${apiUrl}/me`,{
            method: 'GET'
        })
        .then(res => {
            if(res.ok){
                
            }
            else
            {
                console.log('Cannot fetch now')
            }
        })
        .then((data) =>{
                setFetchStuednt(data)
        })
    },[])
  return (
    <div>
{fetchStudent.first_name}
    </div>
  )
}

export default Student