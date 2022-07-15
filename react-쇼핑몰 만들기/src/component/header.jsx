import React from 'react'
import styles from './header.module.css'; //CSS Module화.


function Header() {
  return (
    <nav className={styles.header}>
      <ul className={styles.nav}>
        <li>홈</li>
        <li>스토어</li>
        <li>마켓</li>
        <li>로그인</li>
        <li>장바구니</li>
      </ul>
    </nav>
  )
}

export default Header;