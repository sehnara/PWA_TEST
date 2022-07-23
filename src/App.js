import logo from "./logo.svg";
import "./App.css";
import { firebaseApp } from "./firebase";

const firebaseMessaging = firebaseApp.messaging();
firebaseMessaging
  .requestPermission()
  .then(() => {
    return firebaseMessaging.getToken(); // 등록 토큰 받기
  })
  .then(function (token) {
    console.log(token); //토큰 출력
  })
  .catch(function (error) {
    console.log("FCM Error : ", error);
  });

firebaseMessaging.onMessage((payload) => {
  console.log(payload.notification.title);
  console.log(payload.notification.body);
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
