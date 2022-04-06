import React from "react";
import "./Article.css";

const Article = ({ articleData }) => {
  return (
    <div className="article">
      <img className="article__img" src={articleData.imageUrl} alt=""></img>
      <h1 className="article__title">{articleData.title}</h1>
      <p className="article__summary">{articleData.summary}</p>
      <h5 className="article__time">{articleData.updatedAt.slice(0, 10)}</h5>
    </div>
  );
};

export default Article;
