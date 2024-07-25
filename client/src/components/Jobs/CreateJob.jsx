import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addJob } from '../../redux/actions/jobActions';
import { useNavigate, useParams } from 'react-router-dom';
import './CreateJob.css';
import jobService from './../../services/jobService';

const CreateJob = () => {
  const [title, setTitle] = useState('');
  const [selectedFolder, setSelectedFolder] = useState([])
  const [description, setDescription] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector(state=>state.userReducer)

  const handleSubmit = async (e) => {
    console.log(users)
    e.preventDefault();
    // Dispatch the data to add it in the job list.

    const jobData = {
      title,
      description,
      files: selectedFolder.map(file => ({ name: file.name, url: URL.createObjectURL(file) })),
      username: users.username
    }
    try {
      console.log("creating job")
      const savedJob = await jobService.createJob(jobData)
      console.log(savedJob)
      dispatch(addJob(savedJob));
      navigate(`/jobs?username=${users.username}`);
    } catch (error) {
      console.error('Failed to create a job', error)
    }
  };

  const handleFolderChange = (e) => {
    // const selectedFile = e.target.files[0]
    setSelectedFolder([...e.target.files]); // Get the first selected folder
  };

  return (
    <div className="create-job-container">
      <h2>Create Job</h2>
      <form onSubmit={handleSubmit} className="create-job-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Upload PDF Files:</label>
          <input
            type="file"
            accept='.pdf'
            onChange={handleFolderChange}
            multiple
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateJob;
