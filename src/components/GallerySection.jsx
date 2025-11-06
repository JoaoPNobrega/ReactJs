const images = [
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&q=80',
];

function GallerySection() {
  return (
    <section className="section-card">
      <h2>Galeria de Fotos</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={src}>
            <img src={src} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
