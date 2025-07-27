import { useState } from 'react'
import JobList from './components/JobList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>Job Applications
    <JobList />
    </div>
  );
}

export default App
