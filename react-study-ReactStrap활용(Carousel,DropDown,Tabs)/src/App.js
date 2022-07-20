import React from 'react';
import './App.css';
import ReactCarousel from './Carousel'
import ReactTabs from './reactTabs'
import DropDown from './dropDown';

// yarn add bootstrap 터미널 설치 후 (첫번째) 
// yarn add reactstrap 설치한다. (두번째)

//index.js 에다가
//import 'bootstrap/dist/css/bootstrap.css' 적용한다.


function App() {
  return (
    <div>
      <ReactCarousel />
      <ReactTabs />
      <DropDown />
    </div>
  );
}

export default App;
