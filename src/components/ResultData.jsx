import React, { useState } from 'react';
import DataTable from './DataTable';
import FileUploader from './FileUploader';
import { Spin } from 'antd';

const ResultData = () => {
  // Set initial data for difficultData and abilitiesData
  const [difficultData, setDifficultData] = useState([
    { name: 'Task 1', difficulty: 0.0 },
    { name: 'Task 2', difficulty: 0.0 },
    // Add more initial data items as needed
  ]);

  const [abilitiesData, setAbilitiesData] = useState([
    { name: 'Subject 1', score: 0.0 },
    { name: 'Subject 2', score: 0.0 },
    // Add more initial data items as needed
  ]);

  const [loading, setLoading] = useState(false);

  const handleFileUpload = (responseData) => {
    setLoading(true); // Show spinner when waiting for data

    // Simulating a delay to illustrate the loading spinner
    setTimeout(() => {
      const abilities = responseData.abilities;
      const difficult = responseData.difficult;

      setAbilitiesData(abilities);
      setDifficultData(difficult ? difficult : []); // Set difficultData to empty array if it is not present
      setLoading(false); // Hide spinner after data is received
    }, 2000); // Simulating a 2-second delay, adjust as needed
  };

  return (
    <div>
      <FileUploader onFileUpload={handleFileUpload} />
      {loading ? <Spin /> : null}
      {difficultData.length === 0 ? <Spin /> : <DataTable title="Difficult of Task" data={difficultData} />} 
      {abilitiesData.length === 0 ? <Spin /> : <DataTable title="Subject Abilities" data={abilitiesData} />} 
    </div>
  );
};

export default ResultData;