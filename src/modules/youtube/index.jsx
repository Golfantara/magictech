const yt = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 place-content-center md:hidden">
        <div className="aspect-video grid place-content-center">
          <iframe
            width="300"
            height="315"
            src="https://www.youtube.com/embed/CpgjDdsaV7M"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="aspect-video grid place-content-center">
          <iframe
            width="300"
            height="315"
            src="https://www.youtube.com/embed/ozBeLeOfkmA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      {/* mobile */}
      <div className="hidden md:grid grid-cols-2 place-content-center">
        <div className="aspect-video grid place-content-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CpgjDdsaV7M"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="aspect-video grid place-content-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ozBeLeOfkmA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default yt;
