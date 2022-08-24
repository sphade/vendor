import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-phone-input-2/lib/material.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from 'notistack';
import Zoom from '@mui/material/Zoom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'photoswipe/dist/photoswipe.css'
import { theme } from './Theme';
import { ThemeProvider } from '@mui/material';
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
       
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <SnackbarProvider maxSnack={3} 
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
          }}
          TransitionComponent={Zoom}
          >
          <Routes>
            <Route path="/*" element={<App />} />
            </Routes>
            </SnackbarProvider>
        </Provider>
        </QueryClientProvider>
        </ThemeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
