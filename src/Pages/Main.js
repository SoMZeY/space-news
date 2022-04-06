import React from "react";
import Article from "../components/Article";
import "./Main.css";

const Main = (props) => {
  return (
    <div className="mainPage">
      <ul className="mainPage__list">
        {props.articles.map((article) => {
          return (
            <li key={article.id}>
              <Article articleData={article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
