import React, { useEffect } from 'react';
import './JobDetail.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteJob } from '../../redux/actions/jobActions.js';
import { useState } from 'react';
import FileSaver from 'file-saver';
import { Link, useLocation } from 'react-router-dom';
import EsignButton from '../E-Sign/ESignButton.jsx';
import pdf from "./free-pdf-icon-3385-thumb.png"
import jobService from '../../services/jobService.js';

const JobDetail = ({ userType }) => {
  const[jobs, setJobs] = useState([])
  const [paymentUrl, setPaymentUrl] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  
  const [selectedJobs, setSelectedJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const params = new URLSearchParams(location.search)
        const username = params.get('username')
        const data = await jobService.getJobsByUsername(username);
        setJobs(data)
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    };
    fetchJobs()
  }, [location.search])


  
  const handleJobSelection = (jobId) => {
    setSelectedJobs((prevSelected) =>
      prevSelected.includes(jobId)
        ? prevSelected.filter((id) => id !== jobId)
        : [...prevSelected, jobId]
    );
  };

  const handleDeleteJobs = async () => {
    try {
      for (const jobId of selectedJobs) {
        await jobService.deleteJob(jobId);
      }
      setJobs((prevJobs) => prevJobs.filter((job) => !selectedJobs.includes(job._id)));
      setSelectedJobs([]);
    } catch (error) {
      console.error('Error deleting jobs:', error);
    }
  };

  const handlePayment = async(jobId) => {
    try {
      const url = paymentService.initiatePayment(jobId);
      setPaymentUrl(url)
    } catch (error) {
      console.error('Error initiating payment' , error)
    }
  }

  const downloadFile = (fileUrl, fileName) => {
    FileSaver.saveAs(fileUrl, fileName);
  };
  return (
    <div className="job-detail-container">
      <h2>Job Detail</h2>
      {jobs.map((job, index) => (
        <section key={job._id} className="job-section">
          <h3>Job {index + 1}</h3>
          <div className="job-detail">
            <div className="detail-item">
              <span className="label">Title:</span>
              <span className="value">{job.title}</span>
            </div>
            <div className="detail-item">
              <span className="label">Description:</span>
              <span className="value">{job.description}</span>
            </div>
            {userType === 'admin' && job.files && job.files.length > 0 && (
              <EsignButton documentUrl={job.files[0].url} />
            )}
            {userType === 'admin' && job.files && job.files.length > 0 && (
              <div className="pdf-files">
                <ul>
                  {job.files.map((file, index) => (
                    <li key={index} className="pdf-file">
                      <span>{file.name}</span>
                      <button onClick={() => downloadFile(file.url, file.name)} className="download-button">
                        <img src={pdf} alt="PDF icon" className="pdf-icon" height="50px" width="50px" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {userType === 'admin' && (
              <div>
                <input
                  type="checkbox"
                  checked={selectedJobs.includes(job._id)}
                  onChange={() => handleJobSelection(job._id)}
                />
                <span className="label">Select for deletion</span>
              </div>
            )}
            {userType === 'client' && (
              <button onClick={() => handlePayment(job._id)} className="payment-button">
                Pay Now
              </button>
            )}
          </div>
        </section>
      ))}
      {userType === 'admin' && (
        <button onClick={handleDeleteJobs} className="delete-button">
          Delete Selected Jobs
        </button>
      )}
      {userType === 'client' && (
        <Link to={`/jobs/create`} className="create-another-job-button">
          <button className="btn btn-primary">Create Another Job</button>
        </Link>
      )}
      {paymentUrl && (
        <div>
          <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
            Proceed to Payment
          </a>
        </div>
      )}
    </div>
  );
};

export default JobDetail;