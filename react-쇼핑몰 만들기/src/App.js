import React from 'react';
import './App.css';
import Header from './component/header';
import Main from './component/main';
import Contents from './component/contents';
import Footer from './component/footer';
//styled-components
//JS안에 CSS를 작성하는 라이브러리 입니다.
//yarn add styled-components

function App() {
  return (
    <>
      <Header />
      <Main />
      <Contents />
      <Footer />
    </>
  );
}

export default App;