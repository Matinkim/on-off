//교수님 풀이

import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState("");

  return (
    <div className="app">
      {isShow === "show" && (
        <div className="component">
          <p>
            이 문장은 사용자가 아래 버튼을 클릭했을 때 나타나는 예시
            텍스트입니다. 클릭 전에는 보이지 않다가, 버튼을 누르면 이와 같은
            안내 문구가 표시됩니다.
          </p>
          <button onClick={() => setIsShow("")}>닫기</button>
        </div>
      )}
      <button onClick={() => setIsShow("show")}>컴포넌트 보여주기</button>
    </div>
  );
}

export default App;
