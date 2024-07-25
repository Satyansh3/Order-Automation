import React from 'react';
import './JobDetail.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteJob } from '../../redux/actions/jobActions.js';
import { useState } from 'react';
import FileSaver from 'file-saver';
import { Link, useLocation } from 'react-router-dom';
import EsignButton from '../E-Sign/ESignButton.jsx';
import pdf from "./free-pdf-icon-3385-thumb.png"

const JobDetail = ({ userType }) => {
  const jobs = useSelector(state => state.jobReducer.jobs)
  jobs.map((job,index) =>(
    console.log(((job.sF[0].url).slice(5,)))
  ))
  const users = useSelector(state => state.userReducer)
  console.log("Jobs", jobs)
  console.log("Uese", users.username)

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  console.log(params)
  // const username = params.get('username')
  // console.log(params.query)
  const clientEmail  = params.get('clientEmail')
  console.log("Client Usernmae", users.username)
  console.log('client email', clientEmail)
  const dispatch = useDispatch()
  const [selectedJobs, setSelectedJobs] = useState([]);
  const handleJobSelection = (jobId) => {
    if (selectedJobs.includes(jobId)) {
      setSelectedJobs(selectedJobs.filter(id => id !== jobId));
    } else {
      setSelectedJobs([...selectedJobs, jobId]);
    }
  };
  const handleDeleteJobs = () => {
    selectedJobs.forEach(jobId => {
      dispatch(deleteJob(jobId));
    });
    setSelectedJobs([]);
  }
  const downloadFile = (fileUrl, fileName) => {
    FileSaver.saveAs(fileUrl, fileName)
  }
  const [status, setStatus] = useState('In Progress');
  return (
    <div className="job-detail-container">
      <h2>Job Detail</h2>
      {jobs.map((job, index) => (
        <section key={job.id} className='job-section'>
          <h3>Job {index + 1}</h3>
          <div className="job-detail">
            <div className="detail-item">
              <span className="label">Title:</span>
              <span className="value">{job.t}</span>
            </div>
            <div className="detail-item">
              <span className="label">Description:</span>
              <span className="value">{job.d}</span>
            </div>
            {userType === 'admin' && job.sF && job.sF.length>0 && (
              <EsignButton />
            )}
            {userType === 'admin' && job.sF && job.sF.length>0 && (
              < div className = "pdf-files" >
                <ul>
                  {job.sF.map((file, index) => (
                    <li key={index} className="pdf-file">
                      <span>{file.name}</span>
                      <span>{file.url}</span>
                      <button onClick={() => downloadFile(file.url, file.name)} className="download-button">
                        <img src={pdf} alt="PDF icon" className="pdf-icon" height="50px" width="50px"/>
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
                checked={selectedJobs.includes(job.id)}
                onChange={() => handleJobSelection(job.id)}
              />
              <span className="label">Select for deletion</span>
            </div>
          )}
        </div>
        </section>
  ))
}
{
  userType === 'admin' && (
    <button onClick={handleDeleteJobs} className="delete-button">
      Delete Selected Jobs
    </button>
  )
}
{
  userType === 'client' && (
    <Link to={`/jobs/create-job`} className="create-another-job-button">
      <button className="btn btn-primary">Create Another Job</button>
    </Link>
  )
}
    </div >
  );
};
export default JobDetail;
