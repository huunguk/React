import React from "react";

function User({ user }) { //{user}은 하나의 배열요소이면서, 인덱스가 된다. 
  return (
    <div>
      <b>{user.username}</b><span>{user.email}</span>
    </div>
  )
}

function UserList() {
  //배열로 된 자료를 리스트 자원으로 활용한다.
  const users = [
    {
      id: 1,
      username: '진형욱',
      email: 'jinhyeonguk@gmail.com'
    },
    {
      id: 2,
      username: '박상용',
      email: 'parksangyong@gmail.com'
    },
    {
      id: 3,
      username: '이영준',
      email: 'leeyeongjun@gmail.com'
    },
    {
      id: 4,
      username: '우형택',
      email: 'woohyeongtaek@gmail.com'
    },
    {
      id: 5,
      username: '어시장',
      email: 'ousijang@gmail.com'
    },
  ]
  return (
    <div>
      {/* user={user[0]에서 user은 컴포넌트 호출하면서 속성을 전달한다.} 
          {user[0]}의 속성안에는 해당되는 배열을 인덱스간에 해당한 값이 선언된다.*/}
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
      <User user={users[3]} />
      <User user={users[4]} /> */}

      {/*
      <map()활용>
      일반적인 함수 선언 : () =>{내용} 내용을 시스템 처리
      map()을 사용할 경우 : ()=>(내용) 내용을 화면에 출력  
      */}
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  )
}

export default UserList; 