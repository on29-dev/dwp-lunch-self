import dayjs from "dayjs";
import React from "react";
import "./App.css";
import users from "./initData.js"

function App() {
  const dayOfWeek = dayjs().day();
  const dayOfWeekNum = dayOfWeek > 5 ? 1 : dayOfWeek;
  const dayNameArr = ["월", "화", "수", "목", "금"];
  console.log("users",users)
  return (
    // <container
    //   style={
    //     {
    //       // display: "flex",
    //       // height: "100%",
    //       // flex: 1,
    //       // flexDirection: "column",
    //     }
    //   }
    // >
    <>
      <header style={{ display: "flex" }}>
        <h1 style={{ flex: 1, textAlign: "center" }}>도시락 드실?</h1>
      </header>
      <main style={{ display: "flex", flexDirection: "row" }}>
        <section style={{ flex: 4 }}>
          <h2
            style={{ visibility: "hidden", height: 0, margin: 0, padding: 0 }}
          >
            오늘의 메뉴
          </h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span style={{ marginLeft: `${15 + 18.5 * (dayOfWeekNum - 1)}%` }}>
              <span role="img">⬇️</span>{dayNameArr[dayOfWeekNum - 1]}
            </span>
          </div>
          <img
            src="http://fis.lotte.net:8085/noticeImg/15/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C.jpg"
            alt="3월 2주차 식단표 이미지"
            style={{ width: "100%" }}
          />
        </section>
        <section style={{ flex: 2 }}>
          <h2>먹을 사람</h2>
          <ul>
            {users.map(user => <li key={user.id}><input value={user.id} type="checkbox"/>{user.name}</li>)}
          </ul>
          <button onClick={_=>alert(selectLucky(users, 10))}>뽑기</button>
        </section>
      </main>
    </>
    // </container>
  );
}
const selectLucky = (users, eater) => {
//   1~5명 => 1명
// 6~10명 => 2명
// 11~19명 => 3명
// 20명 이상 => 4명
  let cntToSelect;
  if (eater < 6) {
    cntToSelect = 1
  } else if (eater < 11) {
    cntToSelect = 2
  } else if (eater < 20) {
    cntToSelect = 3
  } else {
    cntToSelect = 4
  }
  const luckyMembers = [];
  for (let i=0; i < cntToSelect; i++){
    const randomIdx = Math.floor(Math.random() * (users.length - 0)); 
    console.log("randomIdx",randomIdx)
    luckyMembers.push(users[randomIdx].name)
    users.splice(randomIdx, 1)
  }
  console.log("luckyMembers",luckyMembers)
  return luckyMembers
}

export default App;
