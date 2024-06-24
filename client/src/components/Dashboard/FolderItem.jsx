import React from 'react';
import { useHistory } from 'react-router-dom';
import './FolderItem.css';

const FolderItem = ({ job }) => {
  const history = useHistory();

  const handleDownload = (folderUrl) => {
    // Redirect to a new page to download the folder
    history.push(`/download-folder?url=${encodeURIComponent(folderUrl)}`);
  };

  return (
    <div className="folder-item" onClick={() => handleDownload(job.folderUrl)}>
      <h3>Job {job.id}</h3>
      <p>{job.title}</p>
    </div>
  );
};

export default FolderItem;
