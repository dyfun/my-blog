import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ContentContext } from "./contexts/Content/ContentContext";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Single from "./components/single/Single";

function App() {
  const { posts, fetchPosts, fetchPost, post } = useContext(ContentContext);

  let status = false;
  if (posts) {
    status = true;
  }
  useEffect(() => fetchPosts(), []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
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
