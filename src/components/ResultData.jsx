import React, { useState } from 'react';
import { Spin } from 'antd';
import DataTable from './DataTable';
import FileUploader from './FileUploader';
import ErrorCard from './ErrorCard';

const ResultData = () => {
  // Set initial data for difficultData and abilitiesData
  const [difficultData, setDifficultData] = useState([]);

  const [abilitiesData, setAbilitiesData] = useState([]);

  const [error, setError] = useState(0);

  const [loading, setLoading] = useState(false);

  const handleFileUpload = (responseData) => {
    setLoading(true); // Show spinner when waiting for data

    // Simulating a delay to illustrate the loading spinner
    setTimeout(() => {
      const abilities = responseData.abilities;
      const difficult = responseData.difficult;
      const modelError = responseData.err;
      setError(modelError)
      setAbilitiesData(abilities);
      setDifficultData(difficult ? difficult : []); // Set difficultData to empty array if it is not present
      setLoading(false); // Hide spinner after data is received
    }, 2000); // Simulating a 2-second delay, adjust as needed
  };

  return (
    <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div>
        <FileUploader onFileUpload={handleFileUpload} />
        {loading && <Spin />}
      </div>
      <div>
      <ErrorCard error={error} />
      </div>
      <div style={{ display: 'flex', gap: '50px' }}>
        <DataTable title="Difficult of Task" data={difficultData} />
        <DataTable title="Subject Abilities" data={abilitiesData} />
      </div>
    </div>        

  );
  
};

export default ResultData;