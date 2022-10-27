import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import NewPost from './pages/NewPost'
// import RedditFeed from './pages/RedditFeed'
import NoPage from './pages/NoPage'

/*
          <Route
            path="RedditFeed"
            element={<RedditFeed />}
          />

          maybe this in the future...
 */
export default function App() {
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/reactCP/build/" element={<Layout />}>
  //         <Route index element={<Home />} />
  //         <Route path="/reactCP/build/about" element={<About />} />
  //         <Route path="/reactCP/build/newpost" element={<NewPost />} />
  //         <Route path="/reactCP/build/*" element={<NoPage />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // );
    return (
    <BrowserRouter basename="/reactCP/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="newpost" element={<NewPost />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
