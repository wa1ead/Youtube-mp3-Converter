function App() {
  return (
    <div className="app">
      <span>Mp3 Converter</span>
      <section className="content">
        <h1 className="content_title">Youtube to mp3 Converter</h1>
        <p className="content-description">
          TRANSFORM YOUTUBE VIDEOS INTO MP3s IN A FEW CLICKS
        </p>
        <form className="form">
          <input
            className="form_input"
            type="URL"
            placeholder="Paste your youtube video URL..."
          />
          <button className="form_submit" type="submit">
            Search
          </button>
        </form>
        <a className="download_btn" href="#">
          Download MP3
        </a>
      </section>
    </div>
  );
}

export default App;
