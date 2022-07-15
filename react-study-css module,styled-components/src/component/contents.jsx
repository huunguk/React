import React from 'react'
import styles from './contents.module.css'; //CSS Module화.
import styled from 'styled-components'; //내부에서 컴포넌트 선언하는 모듈을 연결


const Block = styled.div
  `
  width:100%;
  height:200px;
  background-color:coral;
  `

const Btn = styled.button
  `
  width:200px;
  height:200px;
  background-color:green;
  cursor:pointer;
  &:hover{
    background-color:red;
  }
  `

function Contents() {
  return (
    <div>
      <div className={styles.header}></div>
      <Block />
      <Btn />
    </div>
  )
}

export default Contents;