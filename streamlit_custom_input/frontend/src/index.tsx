import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import CustomInput from './CustomInput';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomInput />
  </React.StrictMode>
);