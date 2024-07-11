const VideoPlayer = () => {
  return (
    <div className="row">
      <h1>Enjoy your fucking recital</h1>
      <iframe
        width="720"
        height="415"
        src="https://www.youtube.com/embed/Ysrioy0eeZ8?si=4ZslrwOLiFwOplca"
        title="YouTube video player"
        frameorder="2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoPlayer;
