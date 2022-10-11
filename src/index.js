import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShipmentsTable from './ShipmentsTable';
import {loadData} from './utils.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShipmentsTable data={loadData()} />
  </React.StrictMode>
);

