import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
 import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute ";
  import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import Search from './pages/Search';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
function App() {
  // const progress = useSelector((state)=> state.home.progress);

  return (
    <BrowserRouter>
     {/* <LoadingBar
        color="#ed092c"
        progress={progress}
        height={4}
          shadow={true}
      />
         */}
         <ScrollToTop />
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/sign-in" element={<Signin />} />
        <Route element={<PrivateRoute/>} >
        
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />

        </Route>
        <Route path="/sign-up" element={<Signup />} />
        <Route path='/search' element={<Search />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
