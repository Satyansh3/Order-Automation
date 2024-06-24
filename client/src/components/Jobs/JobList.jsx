import React from 'react';
import './JobList.css';
import { useSelector } from 'react-redux';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { Link } from 'react-router-dom';

const JobList = () => {
  const jobs = useSelector(state => state.jobReducer.jobs);

  // Function to download folder
  const downloadFolder = async (folderUrl) => {
    try {
      const response = await fetch(folderUrl);
      const folderContents = await response.blob();

      // Create a new ZIP File
      const zip = new JSZip();
      zip.file("folder_contents", folderContents);

      // Generate the ZIP File
      const zipBlob = await zip.generateAsync({ type: "blob" });

      // Save the ZIP File
      FileSaver.saveAs(zipBlob, "folder.zip");
    } catch (error) {
      console.error("Error downloading the folder", error);
    }
  };

  return (
    <div className="job-list-container">
      <h2>Job List</h2>
      {jobs.length > 0 ? (
        <ul className="job-list">
          {jobs.map(job => (
            <li key={job.id}>
              <Link to={`/jobs/${job.id}`} className='job-item'>
                <div className="job-title">{job.t}</div>
                <div className={`job-description ${job.d.toLowerCase()}`}>{job.d}</div>
                {job.sF && (
                  <button onClick={() => downloadFolder(job.sF)} className="download-button">
                    Download Folder
                  </button>
                )}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>No jobs available.</div>
      )}
      <div className="create-job-section">
        <Link to="/create-job" className="create-job-link">
          <button className="btn btn-primary">Create Job</button>
        </Link>
      </div>
    </div>
  );
};

export default JobList;
