import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import data from './database';

const App = () => { 
  const addHoliday = data.map(item => {
    return (
      <Content
        key={item.id}
        item = {item}
      />
    )
  }) 

  return (
    <div> 
      <Navbar />
      <br />      
      {addHoliday}
      <br />
    </div>
  )
}
export default App