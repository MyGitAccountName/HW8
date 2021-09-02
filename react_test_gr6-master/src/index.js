import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    // Синтаксис React для создания разметки
    // React.createElement('button', {
    //     onClick: () => alert('Click')
    // }, 'Кнопка')

     // Синтаксис JSX
      // <div>
      //     Приложение работает
      //     <button>Кнопка</button>
      //   {/*<App />*/}
      // </div>
    <div className={"App"}>
        <App/>
    </div>
    ,document.getElementById('root')
);

reportWebVitals();
