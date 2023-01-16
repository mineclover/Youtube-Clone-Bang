import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
import MainPage from './components/main-page';
import SearchResult from './components/search-result';
import Video from './components/details';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/common/NotFound';
import Comments from './components/details/Comments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <MainPage /> },
      { path: '/search/:searchQuery', element: <SearchResult /> },
      { path: 'video/:videoId', element: <Video /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Comments />
  </React.StrictMode>
);
