import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./Pages/Main";
import api from "./api/axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("/articles");
      setArticles(res.data.reverse());
      //console.log(res);
      return res;
    }
    fetchData();
  }, []);
  console.log(articles);

  return (
    <div className="App">
      <Main articles={articles}></Main>
    </div>
  );
}

export default App;
