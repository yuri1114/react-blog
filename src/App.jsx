import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [title, setTitle] = useState(0);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState([""]);

  function 함수(i) {
    let likeCopy = [...따봉];
    likeCopy[i] = likeCopy[i] + 1;
    따봉변경(likeCopy);
  }

  function 글변경() {
    let copy = [...글제목];
    copy[0] = "여자코트 추천";
    제목변경(copy);
  }

  function 글정렬() {
    let copyArray = [...글제목];
    copyArray.sort();
    제목변경(copyArray);
  }

  function 글추가() {
    let addArray = [...글제목];
    addArray.unshift(입력값);
    제목변경(addArray);
  }

  return (
    <div className="App">
      <button onClick={글변경}>수정</button>
      <button onClick={글정렬}>가나다 정렬</button>

      <button
        onClick={() => {
          글추가();
        }}
      >
        {" "}
        등록{" "}
      </button>
      <input
        onChange={(e) => {
          console.log("??", 입력값);
          입력값변경(e.target.value);
        }}
        type="text"
      />
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  함수(i);
                }}
              >
                👍
              </span>{" "}
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      {modal == true ? <Modal 글제목={글제목} title={title}></Modal> : false}
    </div>
  );

  function Modal(props) {
    return (
      <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    );
  }
}
export default App;
