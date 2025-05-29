import React from 'react';
import { ResumeProvider } from './context/ResumeContext';
import ResumeBuilder from './pages/ResumeBuilder';

function App() {
  return (
    <ResumeProvider>
      <div className="min-h-screen bg-gray-50">
        <ResumeBuilder />
      </div>
    </ResumeProvider>
  );
}

export default App;