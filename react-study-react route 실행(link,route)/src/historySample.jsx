import React from 'react';

const HistorySample = ({ history }) => {
  const goBack = () => {
    history.goBack(); //이전 컴포넌트로 이동한다.
  }
  const goHome = () => {
    history.push('/'); //특정 컴포넌트로 이동한다.
  }


  return (
    <div>
      <h1>History</h1>
      <button onClick={goBack}>뒤로가기 </button>
      <button onClick={goHome}>홈</button>
    </div>
  )
}

export default HistorySample;