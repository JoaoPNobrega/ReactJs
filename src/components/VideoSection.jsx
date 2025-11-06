function VideoSection() {
  return (
    <section className="section-card">
      <h2>Vídeo em destaque</h2>
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default VideoSection;
