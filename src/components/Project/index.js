import { BsGithub } from 'react-icons/bs';

function Projects() {
  return (
    <>
      <section id="work" className="content container-fluid justify-content-between">
          <h2 className="mx-auto">
            work:
          </h2>
        <div className="row flex flex-wrap">
        <div className="col-12">
          <div className="row flex-row pb-5">
            <div className="prj-card">
              <div className='github-flex align-items-center justify-content-center'>
                <h3 className='my-2'>Troubleshot</h3>
                <a href="https://github.com/Hone12345678/Troubleshot" target="_blank" rel="noreferrer" className="light link mx-2"><BsGithub /></a>
              </div>
              <a href="https://troubleshot.herokuapp.com/" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/Troubleshot.png`)} alt="screenshot and link to Troubleshot website, click to proceed" className="project-img rounded" />
              </a>
            </div>
            <div className="prj-card">
              <div className='github-flex align-items-center justify-content-center'>
              <h3 className="my-2">Chrip</h3>
              <a href="https://github.com/dhalladay/travel-app-events" target="_blank" rel="noreferrer" className="light link mx-2"><BsGithub /></a>

              </div>
              <a href="https://dhalladay.github.io/travel-app-events/" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/Chrip.png`)} alt="screenshot and link to Chrip website, click to proceed" className="project-img rounded" />
              </a>
            </div>
            <div className="prj-card">
              <div className='github-flex align-items-center justify-content-center'>
              <h3 className="my-2">WorthIt</h3>
              <a href="https://github.com/Hone12345678/worthIt" target="_blank" rel="noreferrer" className="light link mx-2"><BsGithub /></a>

              </div>
                <a href="https://worth-it-2022.herokuapp.com/" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/WorthIt.png`)} alt="screenshot and link to run-buddy, a guided html and css example" className="project-img rounded" />
              </a>
            </div>
            <div className="prj-card">
              <div className='github-flex align-items-center justify-content-center'>
              <h3 className="my-2">Tech Social Network</h3>
              <a href="https://github.com/dhalladay/tech-blog" target="_blank" rel="noreferrer" className="light link mx-2"><BsGithub /></a>

              </div>
              <a href="https://shielded-falls-52220.herokuapp.com/" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/The-Tech-Blog.png`)} alt="screenshot and link to The Tech Blog website, click to proceed" className="project-img rounded" />
              </a>
            </div>
            <div className="prj-card">
              <div className='github-flex align-items-center justify-content-center'>
              <h3 className="my-2">Work Day Scheduler</h3>
              <a href="https://github.com/dhalladay/daily-calendar" target="_blank" rel="noreferrer" className="light link mx-2"><BsGithub /></a>

              </div>
              <a href="https://dhalladay.github.io/daily-calendar/" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/Work-Day-Scheduler.png`)} alt="screenshot and link to workday scheduler application" className="project-img rounded" />
              </a>
            </div>
            <div className="prj-card">
              <div className='github-flex align-items-center justify-content-center'>
              <h3 className="my-2">Weather Dashboard</h3>
              <a href="https://github.com/dhalladay/travel-weather-dashboard" target="_blank" rel="noreferrer" className="light link mx-2"><BsGithub /></a>

              </div>
              <a href="https://dhalladay.github.io/travel-weather-dashboard/" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/weather-dashboard-screenshot.png`)} alt="screenshot and link a weather dashboard" className="project-img rounded mx-auto" />
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
