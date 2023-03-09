import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components'
import { Provider } from "react-redux";
import store from './redux/config/cofigStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const commonTheme = {
  mainColor: "#fffff",
  subColor: "#bcbcbc",
  bgColor: "#ffffff",
  mainTextColor: "#666666",
  subTextColor: "#333435",
  borderColor: "#ebebeb",
  engFont: "'Montserrat', sans-serif;"
}

root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <ThemeProvider theme={commonTheme}>
        <App />
      </ThemeProvider>
      </Provider>
  </React.StrictMode>
);
