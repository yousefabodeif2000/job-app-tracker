import React, { useState, useEffect } from 'react';
import api from '../api';

const JobList = () => {

    const [jobs, setJobs] = useState([]);


    useEffect(() => 
        {
            api.get('job-applications/')
                .then((response) => {setJobs(response.data);})
                .catch((error) => {
                    console.error('Error fetching jobs:', error);
                });

        }, []);

        return (
        console.log("jobs count: " + jobs.length),
        <div>
            <h2>Job Applications</h2>
            <ul> 
                {jobs.map((job) => (
                    <li key={job.id}>
                        <strong>{job.title}</strong> at {job.company} - {job.status} on {job.date_applied}
                    </li>
                ))}
            </ul>
        </div>
        );
};

export default JobList;