import React from 'react';
import { Routes, store } from '../config';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import firebase from "../config/firebase"

function App() {
  React.useEffect(() => {
    const msg=firebase.messaging();
    msg.requestPermission()
    .then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data)
    }).catch((err)=> {
      console.log('err', err);
    })
    .catch((err)=> {
      console.log(err);
    })
  })

  return (
    <Provider store={store}>
    <Routes/>
    </Provider>
  );
}

export default App;