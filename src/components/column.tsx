import SearchBar from "./SearchBar";
import "./component-styles/column.css";

const column = () => {
  const leftImages = Array.from(
    { length: 4 },
    (_, i) => `../assets/l${i + 1}.png`
  );
  const rightImages = Array.from(
    { length: 4 },
    (_, i) => `../assets/r${i + 1}.png`
  );

  const renderImageColumn = (images: string[], direction: string) => (
    <div className={`image-column ${direction}`}>
      {[...images, ...images].map((src, i) => (
        <img key={`${direction}-${i}`} src={src} alt="" />
      ))}
    </div>
  );

  const renderScrollImages = () => (
    <div className="column-scroll-images">
      {[...leftImages, ...rightImages].map((src, i) => (
        <img key={`scroll-${i}`} src={src} alt={`scroll-img-${i}`} />
      ))}
    </div>
  );

  return (
    <div className="column-wrapper">
      <div className="app-container">
        <section className="column-section">
          <div className="column-images-container">
            {renderImageColumn(leftImages, "animate-scroll-down")}
            {renderImageColumn(rightImages, "animate-scroll-up")}
          </div>

          <div className="column-content">
            <h1>
              Book an appointment with{" "}
              <span className="highlight-text">lifestyle medicine</span> experts
            </h1>
            <p>Optimize your lifestyle and reverse chronic diseases.</p>
          </div>

          <div className="diagonal-gradient-swoosh-mobile"></div>

          <div
            className="search-bar-floating"
            style={{
              position: "absolute",
              bottom: "250px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <SearchBar />
          </div>

          {renderScrollImages()}
        </section>
      </div>
    </div>
  );
};

export default column;
