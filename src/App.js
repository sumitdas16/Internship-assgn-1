import React, { useState } from 'react';
import './App.css';
import validate from './Utils/ValidationLogic';
import TextField from "./Components/Textfield"
import SuccessState from './Components/SuccessState'; // Import the SuccessState component

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // If no validation errors, set the form as submitted
      setIsSubmitted(true);
      console.log('Form submitted successfully');
    }
  };

  const countryOptions = ['India', 'USA', 'Canada'];
  const cityOptions = ['New York', 'Los Angeles', 'Chicago'];

  return (
    <div className="App">

      {isSubmitted ? (
        <SuccessState />
      ) : (
        <div>
          <h1>Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <TextField label="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <p className="error">{errors.firstName}</p>}

            <TextField label="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <p className="error">{errors.lastName}</p>}

            <TextField label="Username" type="text" name="username" value={formData.username} onChange={handleChange} />
            {errors.username && <p className="error">{errors.username}</p>}

            <TextField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}

            <TextField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <p className="error">{errors.password}</p>}

            <TextField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <TextField label="Country" type="dropdown" name="country" value={formData.country} onChange={handleChange} options={countryOptions} />
            {errors.country && <p className="error">{errors.country}</p>}

            <TextField label="City" type="dropdown" name="city" value={formData.city} onChange={handleChange} options={cityOptions} />
            {errors.city && <p className="error">{errors.city}</p>}

            <TextField label="Pan No." type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
            {errors.panNo && <p className="error">{errors.panNo}</p>}

            <TextField label="Aadhar No." type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
            {errors.aadharNo && <p className="error">{errors.aadharNo}</p>}

            <TextField label="Sign In" type="submit" />
          </form>
        </div>


      )}
    </div>
  );
}

export default App;