const API_KEY = "62ca31ca93c84eaf82889df94697e721";
const BASE_URL = "https://newsapi.org/v2";

const getTopHeadlines = async (category = "technology", maxResults = 10) => {
  const url = new URL(`${BASE_URL}/top-headlines`);
  url.searchParams.append("apiKey", API_KEY);
  url.searchParams.append("category", category);
  url.searchParams.append("country", "us");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching news: ${response.statusText}`);
    }
    const data = await response.json();
    return data.articles.slice(0, maxResults);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getTopHeadlines;
