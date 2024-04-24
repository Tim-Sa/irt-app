import React from 'react';
import { Table } from 'antd';

const DataTable = ({ title, data }) => {
  const dataEntries = Object.entries(data);

  const columns = [
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  const formattedData = dataEntries.map(([key, value], index) => ({
    key: index,
    name: key,
    value: value,
  }));

  return (
    <div>
      <h2>{title}</h2>
      <Table columns={columns} dataSource={formattedData} />
    </div>
  );
};

export default DataTable;