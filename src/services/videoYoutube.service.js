const videoService = {
  getVideo: async (id) => {
    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    url.searchParams.append("part", "snippet");
    url.searchParams.append("id", id);
    url.searchParams.append("key", process.env.REACT_APP_YOUTUBE_API_KEY);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching video: ${response.statusText}`);
      }
      const data = await response.json();
      return data.items[0];
    } catch (error) {
      console.error(error);
      return {};
    }
  },
};
export default videoService;
