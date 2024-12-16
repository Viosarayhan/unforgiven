import React from 'react';
import Navbar from '../../Components/Elements/Navbar/Navbar';
import Quiz from './quiz'; 

function App() {
    return (
      <div>
        <Navbar/>
        <div className="mt-[64px]">
          <Quiz />
        </div>
        
      </div>
    );
  }
  
  export default App;
  