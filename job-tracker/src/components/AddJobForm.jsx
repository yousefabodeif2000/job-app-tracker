import { useState } from 'react';
import api from '../api'; // this is your configured axios instance

const AddJobForm = () => {
  const [formData, setFormData] = useState({
    user: 1,
    company: '',
    title: '',
    status: 'APPLIED', // default value
    location: '',
    date_applied: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await api.post('job-applications/', formData);
    console.log('Job added:', response.data);
      } catch (error) {
      if (error.response) {
      console.error('Validation error:', error.response.data);
      alert(JSON.stringify(error.response.data, null, 2)); // optional: show alert
        } else {
      console.error('Unexpected error:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="company" 
        placeholder="Company" 
        value={formData.company} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        name="title" 
        placeholder="Job Title" 
        value={formData.title} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        name="location" 
        placeholder="Location" 
        value={formData.location} 
        onChange={handleChange} 
      />
      <input 
        type="date" 
        name="date_applied" 
        value={formData.date_applied} 
        onChange={handleChange} 
      />
      <select 
        name="status" 
        value={formData.status} 
        onChange={handleChange}
      >
        <option value="APPLIED">Applied</option>
        <option value="INTERVIEW">Interviewing</option>
        <option value="OFFER">Offer</option>
        <option value="REJECTED">Rejected</option>
      </select>
      <button type="submit">Add Job</button>
    </form>
  );
};

export default AddJobForm;
