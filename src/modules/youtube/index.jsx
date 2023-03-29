const yt = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center">
      <div className="aspect-video grid place-content-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hUSYT183EB8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="aspect-video grid place-content-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WzEQQqUNovw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default yt;
