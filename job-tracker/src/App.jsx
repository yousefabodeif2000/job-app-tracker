import { useState } from 'react'
import JobList from './components/JobList'
import './App.css'
import AddJobForm from './components/AddJobForm';
import FetchJobs from './components/FetchJobs';
function App() {
  return (
    <div>Add a job application.
    <AddJobForm />
      <h1>Job Tracker</h1>
      <p>Click the button to fetch job applications.</p>
      <FetchJobs />
    </div>
  );
}

export default App
