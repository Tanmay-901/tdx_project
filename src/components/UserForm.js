import React, { useState } from 'react';
import './UserForm.css';
import { useNavigate } from 'react-router-dom'; 

const UserForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    if (!name) errors.name = 'Name is required';
    if (!/^\d{10}$/.test(mobile)) errors.mobile = 'Mobile number must be 10 digits';
    if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email address is invalid';
    if (!city) errors.city = 'City is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ name, mobile, email, city });
      navigate('/questionnaire');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Mobile:</label>
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>City:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>
        <button type="submit">Start Questionnaire</button>
      </form>
    </div>
  );
};

export default UserForm;
