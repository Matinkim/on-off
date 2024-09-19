import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  let content;

  if (show === true) {
    content = (
      <div className="component">
        <p>
          이 문장은 사용자가 아래 버튼을 클릭했을 때 나타나는 예시 텍스트입니다.
          클릭 전에는 보이지 않다가, 버튼을 누르면 이와 같은 안내 문구가
          표시됩니다.
        </p>
        <button onClick={() => setShow(false)}>닫기</button>
      </div>
    );
  } else {
    content = <button onClick={() => setShow(true)}>컴포넌트 보여주기</button>;
  }

  return <div className="app">{content}</div>;
}

export default App;
