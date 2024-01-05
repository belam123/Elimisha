import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiPencil, BiTrash } from 'react-icons/bi';

const apiUrl = import.meta.env.VITE_API_URL;

// Reusable Table Component
const StudentTable = ({ students, handleEdit, handleDelete }) => (
  <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
    <thead>
      <tr className="bg-gray-100">
        <th className="py-3 px-6 border-b">First Name</th>
        <th className="py-3 px-6 border-b">Second Name</th>
        <th className="py-3 px-6 border-b">Last Name</th>
        <th className="py-3 px-6 border-b">Email</th>
        <th className="py-3 px-6 border-b">Form</th>
        <th className="py-3 px-6 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      {students.map((student) => (
        <tr key={student.id} className="border-b hover:bg-gray-100 transition-colors">
          <td className="py-2 px-6">{student.first_name}</td>
          <td className="py-2 px-6">{student.second_name}</td>
          <td className="py-2 px-6">{student.last_name}</td>
          <td className="py-2 px-6">{student.email}</td>
          <td className="py-2 px-6">{student.form.year}</td>
          <td className="py-2 px-6">
            <button onClick={() => handleEdit(student.id)} className="text-blue-500 hover:underline mr-2">
              <BiPencil />
            </button>
            <button onClick={() => handleDelete(student.id)} className="text-red-500 hover:underline">
              <BiTrash />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);


// Reusable Search Bar Component
const SearchBar = ({ searchTerm, handleSearch }) => (
  <div>
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
      className="py-2 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>
);

// Reusable Create Button Component
const CreateButton = () => (
  <div>
    <button className="py-2 px-4 bg-green-500 text-white rounded transition-colors duration-300 hover:bg-green-600">
      Create
    </button>
  </div>
);
// Reusable form
const registerStudentForm = () => {
  <div>
   <input type="text" />
  </div>

}
function Register() {
  const [showStudents, setShowDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(`${apiUrl}/all`)
      .then(response => {
        const students = response.data;
        setShowDetails(students);
      })
      .catch(error => {
        console.error('Failed to fetch', error);
      });
  }, []);

  const handleCreate = () => {
    const details ={student: {first_name,second_name,last_name,email,password,password_confirmation,form_id}}
    axios.post(`${apiUrl}/register`,{details})
    .then(res => {
      console.log(res)
      if(res.status == 200 && res.status <= 300){
        console.log(res)
      }
      else{
        console.log(res.status)
      }
    })
  }

  const studentsPerPage = 10;
  const totalPages = Math.ceil(showStudents.length / studentsPerPage);

  const handleClickNext = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevClick = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleEdit = (studentId) => {
    console.log(`Edit button clicked for student with ID ${studentId}`);
  };

  const handleDelete = (studentId) => {
    console.log(`Delete button clicked for student with ID ${studentId}`);
  };

  const paginatedStudents = showStudents.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  );

  const filteredStudents = paginatedStudents.filter(student =>
    student.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between items-center mb-4">
        <SearchBar searchTerm={searchTerm} handleSearch={setSearchTerm} />
        <CreateButton />
      </div>

      <div className="overflow-x-auto">
        <StudentTable students={filteredStudents} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
      
      <div className="flex justify-between mt-4">
        <button onClick={handlePrevClick} disabled={currentPage === 1} className="py-2 px-4 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 hover:bg-blue-600">
          Prev
        </button>
        <button onClick={handleClickNext} disabled={currentPage === totalPages} className="py-2 px-4 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 hover:bg-blue-600">
          Next
        </button>
      </div>
    </div>
  );
}

export default Register;
