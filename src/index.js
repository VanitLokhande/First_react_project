import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Cricket from './Cricket';
import Test from './Test';
import Bollywood from './Bollywood';
import Van from './Van';
import Lifted from './Lifted';
import Dataupdate from './Dataupdate';
import Practise from './Practise';
import Formfn from './Formfn';
import reportWebVitals from './reportWebVitals';
import OnclickChangecolour from './OnclickChangeColour';
import HOC_City from './HOC/HOC_City';
import Practisechild from './PractiseChild';
import Todo from './Todo';
import Practise1 from './Practise1';
import EMI from './EMI/EMI';
import VanR from './VanR';
import InterviewTask from './InteviewTask';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
