import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

setTimeout(() => {
  const container = document.getElementById('vs-accord');
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
  } else {
    console.error('vs-accord element not found');
  }
}, 2000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();asdasdasd
