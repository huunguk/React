import React, { useState, useRef } from "react";

function MultiInput() {
  const [inputs, setInputs] = useState({ //여러개의 값이 바뀌는 변수를 선언하기 위해 객체 형식으로 선언했다.
    userid: '',
    name: ''
  });

  const useridInput = useRef(); //특정 dom을 선택 -> 여러개 input 태그중에 시작태그를 선택
  const { userid, name } = inputs; //비구조화 할당을 통해 값을 전달한다. 


  const onChange = (e) => {
    const { value, name } = e.target;
    //e.target에서 name속성과 value값을 가져온다.
    //각각의 input태그의 name속성과 value값으로 가져온다. (event(e)가 일어났을때(입력했을때))
    setInputs({
      ...inputs, //객체를 복사(userid의 value값, name의 value값), spread문법
      [name]: value
      //name키를 가진 값을 value로 설정한다.
      //name의 속성별로 value값을 설정해서 아래 보여주는 부분(<b>아이디,이름</b>)에 각각 설정한다.
    });
  }

  const onReset = () => {
    setInputs({
      userid: '',
      name: ''
    });
    useridInput.current.focus(); //useridInput에 커서가 깜빡깜빡이게 만드는것.
  }

  return (
    <div>
      <input name='userid' onChange={onChange} placeholder="아이디" value={userid} ref={useridInput} />
      <input name='name' onChange={onChange} placeholder="이름" value={name} />
      <button onClick={onReset}>지우기</button>
      <div>
        <b>아이디:{userid}</b>,
        <b>이름:{name}</b>
      </div>
    </div>
  )
}

export default MultiInput;