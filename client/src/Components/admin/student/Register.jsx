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
const CreateButton = ({ onClick }) => (
  <div>
    <button
      onClick={() => onClick(true)}
      className="py-2 px-4 bg-green-500 text-white rounded transition-colors duration-300 hover:bg-green-600"
    >
      Create
    </button>
  </div>
);
const FormInput = ({ label, type, value, onChange, options }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700" htmlFor={label}>
      {label}
    </label>
    {type === 'text' || type === 'password' ? (
      <input
        type={type}
        id={label}
        value={value}
        onChange={(e) => onChange(e, label)} // Pass the label as the second argument
        className="mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
      />
    ) : (
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e, label)} // Pass the label as the second argument
        className="mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
      >
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    )}
  </div>
);

const registerStudentForm = ({ formData, handleInputChange, handleCreate }) => (
  <form className="max-w-lg mx-auto">
    <h1 className="text-gray-700 font-semibold text-center mb-4 text-2xl underline">Student Registration</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <FormInput label="First Name" type="text" name="first_name" value={formData.first_name} onChange={(e) => handleInputChange(e, 'first_name')} />
<FormInput label="Second Name" type="text" value={formData.second_name} onChange={(e) => handleInputChange(e, 'second_name')} />
<FormInput label="Last Name" type="text" value={formData.last_name} onChange={(e) => handleInputChange(e, 'last_name')} />
<FormInput label="Email" type="text" value={formData.email} onChange={(e) => handleInputChange(e, 'email')} />
<FormInput label="Password" type="password" value={formData.password} onChange={(e) => handleInputChange(e, 'password')} />
<FormInput label="Confirm Password" type="password" value={formData.password_confirmation} onChange={(e) => handleInputChange(e, 'password_confirmation')} />
<FormInput
  label="Form"
  type="select"
  value={formData.form_id}
  onChange={(e) => handleInputChange(e, 'form_id')}
  options={[
    { value: '1', label: 'Freshman' },
    { value: '2', label: 'Sophomore' },
    { value: '3', label: 'Junior' },
    { value: '4', label: 'Senior' },
  ]}
/>
      <div className="col-span-full">
        {/* Image Input */}
        <label className="block text-sm font-medium text-gray-700">Profile Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleInputChange({ name: 'profileImage', value: e.target.files[0] })}
          className="mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </div>
    <button
      type="button"
      onClick={handleCreate}
      className="w-full py-2 px-4 bg-green-500 text-white rounded transition-colors duration-300 hover:bg-green-600 mt-4"
    >
      Submit
    </button>
  </form>
);
function Register() {
  const [showStudents, setShowDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const[formData,setFormData] = useState({
    first_name: '',
    second_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    form_id: '',
  })
 const[openForm,setOpenForm] = useState(false)

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



  const handleInputChange = (e, name) => {
   
    if (e && e.target) {
      const { value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  

    const handleCreate = () => {
      const student = {
       
          first_name: formData.first_name,
          second_name: formData.second_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
          form_id: formData.form_id,
          profileImage: formData.image, 
      
      }
    axios.post(`${apiUrl}/register`,{student})
    .then(res => {
      console.log(res)
      if(res.status == 200 && res.status <= 300){
        console.log(res)
      }
      else{
        console.log(res.status)
      }
    })
    
      setOpenForm(true)
    
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
        <CreateButton onClick={setOpenForm} />
      </div>
  
      {openForm && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-black bg-opacity-40 backdrop-blur-md absolute inset-0 z-10"></div>
          <div className="bg-white p-8 rounded-lg shadow-lg z-20 relative">
            <form>
              {/* Render your registerStudentForm component with the correct props */}
              {registerStudentForm({ formData, handleInputChange, handleCreate })}
              <button
                type="button"
                onClick={() => setOpenForm(false)}
                className="py-2 px-4 bg-red-500 text-white rounded transition-colors duration-300 hover:bg-red-600 mt-4"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
  
      <div className="overflow-x-auto">
        <StudentTable students={filteredStudents} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
  
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          className="py-2 px-4 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 hover:bg-blue-600"
        >
          Prev
        </button>
        <button
          onClick={handleClickNext}
          disabled={currentPage === totalPages}
          className="py-2 px-4 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
      }
export default Register;  