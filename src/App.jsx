import { useState } from "react";
import "./App.css";

function App() {
  let [title, chageTitle] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [like, addLike] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [value, valueChage] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React study 블로그</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자코트 추천";
          chageTitle(copy);
        }}
      >
        수정
      </button>

      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          chageTitle(copy);
        }}
      >
        가나다순정렬
      </button>

      {title.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal, setModalTitle(i));
              }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  addLike(copy);
                }}
              >
                👍
              </span>
              {like[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                chageTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          valueChage(e.target.value);
          console.log(value);
        }}
        type="text"
      ></input>
      <button
        onClick={() => {
          let copy = [...title];
          copy.unshift(value);
          chageTitle(copy);

          let copyLike = [...like];
          copyLike.unshift(0); // 새 글 추가 시 좋아요 초기화
          addLike(copyLike);
        }}
      >
        글발행
      </button>

      {modal == true ? (
        <Modal title={title} modalTitle={modalTitle} setModal={setModal} />
      ) : (
        false
      )}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>

      <button onClick={() => props.setModal(false)}>닫기</button>
    </div>
  );
}

export default App;
