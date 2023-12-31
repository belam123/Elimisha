import React, { useState } from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
const apiUrl = import.meta.env.VITE_API_URL;


function Register() {
    const[first_name,setFirstName] = useState('')
    const[second_name,setSecName] = useState('')
    const[last_name,setTLastName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[password_confirmation, setConfirmation] = useState('')
    const[form_id, setFormId] = useState('')
    const [file, setFile] = useState(null);


    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    };
    
    const handleRegister = () => {
      const formData = new FormData();
      formData.append('student[first_name]', first_name);
      formData.append('student[second_name]', second_name);
      formData.append('student[last_name]', last_name);
      formData.append('student[email]', email);
      formData.append('student[password]', password);
      formData.append('student[password_confirmation]', password_confirmation);
      formData.append('student[form_id]', form_id);
      formData.append('student[image]', file);
    
      fetch(`${apiUrl}/register`, {
        method: 'POST',
        body:formData,
      })
        .then((res) => res.json())
        .then((data) => {
          
        })
        .catch((error) => console.error(error));
    };
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://img.freepik.com/free-vector/reviews-concept-landing-page_52683-11367.jpg?w=2000"
          alt="ERROR 404"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Register with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <BiLogoFacebook
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <BiLogoInstagram
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <AiOutlineTwitter
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="First name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Second name"
              value={second_name}
              onChange={(e) => setSecName(e.target.value)}
            />
          </div>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-3"
          type="text"
          placeholder="Last name"
          value={last_name}
          onChange={(e) => setTLastName(e.target.value)}
        />
        <input
        type="file"
        accept="image/*"
        name="image"
        id="image"
        onChange={handleFileChange}
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-3"
      />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-3"
          type="email"
          placeholder="Example@careercampus.ac.ke"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-3"
          type="password"
          placeholder="Confirm password"
          value={password_confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        />
        <select className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-3"
        value={form_id} 
        onChange={(e) => setFormId(e.target.value)}
        >
          <option value="" disabled hidden>
            Select year
          </option>
          <option value="1">freshman</option>
          <option value="2">sophomore</option>
          <option value="3">junior</option>
          <option value="4">senior</option>
        </select>
        <div className="mt-2 flex items-center">
          <input className="mr-1" type="checkbox" />
          <span className="text-slate-500">Agree To Terms & Conditions</span>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?{' '}
          <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">
            Login
          </a>
        </div>
      </div>
    </section>
  );
}

export default Register;
