function Portfolio() {
  return (
    <>
    <section id="work" className="content container">
      <div className="row">
        <h2 className="section-header col-2">
          Work
        </h2>
      </div>
      <div className="col-8">
        <div className="row justify-content-between">
          <div className="project-item col-12 p-3">
            <h3 className="rounded shadow-lg">Troubleshot</h3>
            <a href="https://troubleshot.herokuapp.com/" target="_blank" rel="noreferrer" className="project-link">
              <img src={require(`../../assets/images/troubleshot.herokuapp.com.png`)} alt="screenshot and link to Troubleshot website, click to proceed" className="project-img rounded" />
            </a>
          </div>
          <div className="project-item col-lg-6 p-3">
            <h3 className="rounded shadow-lg">Chrip</h3>
            <a href="https://dhalladay.github.io/travel-app-events/" target="_blank" rel="noreferrer" className="project-link">
              <img src={require(`../../assets/images/chrip.png`)} alt="screenshot and link to Chrip website, click to proceed" className="project-img rounded" />
            </a>
          </div>
          <div className="project-item col-lg-6 p-3">
            <h3 className="rounded shadow-lg">Work Day Scheduler</h3>
            <a href="https://dhalladay.github.io/daily-calendar/" target="_blank" rel="noreferrer" className="project-link">
              <img src={require(`../../assets/images/workday_schedule_screenshot.png`)} alt="screenshot and link to workday scheduler application" className="project-img rounded" />
            </a>
          </div>
          <div className="project-item col-lg-6 p-3">
            <h3 className="rounded shadow-lg">Run-buddy</h3>
            <a href="https://dhalladay.github.io/run-buddy/" target="_blank" rel="noreferrer" className="project-link">
              <img src={require(`../../assets/images/run-buddy snap.PNG`)} alt="screenshot and link to run-buddy, a guided html and css example" className="project-img rounded" />
            </a>
          </div>
          <div className="project-item col-lg-6 p-3">
            <h3 className="rounded shadow-lg">Coding Quiz</h3>
            <a href="https://dhalladay.github.io/timed-quiz-quatro/" target="_blank" rel="noreferrer" className="project-link">
              <img src={require(`../../assets/images/snapshot.PNG`)} alt="screenshot and link to a coding-related quiz" className="project-img rounded mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Portfolio