import { useState } from 'react';
import api from '../api'; 

function FetchJobs(){
    const[jobs, setJobs] = useState([]);
    const fetchJobs = async () => {
        try {
            const response = await api.get('job-applications/');
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    return (
        <div>
           <button onClick={fetchJobs}>Fetch Job Applications</button>
            <ul style ={{ listStyleType: 'none', padding: 0 }}>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <strong>{job.title}</strong> at {job.company} - {job.status} on {job.date_applied}
                    </li>
                ))}
            </ul>
        </div>
    );

}
export default FetchJobs;