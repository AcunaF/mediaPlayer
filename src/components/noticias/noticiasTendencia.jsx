import React, { useEffect, useState } from "react";
import { Oval as Loader } from "react-loader-spinner"; // Importar específicamente Oval
import getTopHeadlines from "../../services/notice.service";
import "./tendencia.styles.scss";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getTopHeadlines();
        setArticles(news);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h1 className="title">Latest News</h1>
      {loading ? (
        <Loader type="Oval" color="#007bff" height={50} width={50} />
      ) : (
        <ul className="news-list">
          {articles.map((article, index) => (
            <li key={index} className="card">
              <div className="card-header">
                <li className="card-icon fas fa-newspaper"></li>
                <small className="card-title">{article.title}</small>
              </div>
              <div className="card-body">
                {article.urlToImage && (
                  <img
                    className="card-image"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                )}
                <a
                  className="card-link"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsFeed;
