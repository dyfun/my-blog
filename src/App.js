import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ContentContext } from "./contexts/Content/ContentContext";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Single from "./components/single/Single";

function App() {
  const { maxLimit, posts, fetchPosts, fetchPost, post } =
    useContext(ContentContext);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home posts={posts} maxLimit={maxLimit} fetchPosts={fetchPosts} />
          }
        />
        <Route
          path="/:slug"
          element={<Single posts={posts} fetchPost={fetchPost} post={post} />}
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
