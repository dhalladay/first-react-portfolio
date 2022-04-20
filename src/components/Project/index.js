import { BsGithub } from 'react-icons/bs';

function Projects() {
  return (
    <>
      <section id="work" className="content container w-100">
        <div className="row">
          <h2 className="section-header col-2">
            Work
          </h2>
        </div>
        <div className="col-11">
          <div className="flex-row">
            <div className="prj-card">
              <div className='github-flex'>
                <h3 className='my-2'>Troubleshot</h3>
                <a href="https://github.com/Hone12345678/Troubleshot" target="_blank" rel="noreferrer" className="light link myt-2 mx-2"><BsGithub /></a>
              </div>
              <a href="https://troubleshot.herokuapp.com/" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/Troubleshot.png`)} alt="screenshot and link to Troubleshot website, click to proceed" className="project-img rounded" />
              </a>
            </div>
            <div className="prj-card">
              <div className='github-flex'>
              <h3 className="my-2">Chrip</h3>
              <a href="https://github.com/dhalladay/travel-app-events" target="_blank" rel="noreferrer" className="light link myt-2 mx-2"><BsGithub /></a>

              </div>
              <a href="https://dhalladay.github.io/travel-app-events/" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/Chrip.png`)} alt="screenshot and link to Chrip website, click to proceed" className="project-img rounded" />
              </a>
            </div>
            <div className="prj-card">
              <div className='github-flex'>
              <h3 className="my-2">The Tech Blog</h3>
              <a href="https://github.com/dhalladay/tech-blog" target="_blank" rel="noreferrer" className="light link myt-2 mx-2"><BsGithub /></a>

              </div>
              <a href="https://shielded-falls-52220.herokuapp.com/" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/The-Tech-Blog.png`)} alt="screenshot and link to The Tech Blog website, click to proceed" className="project-img rounded" />
              </a>
            </div>
            <div className="prj-card">
              <div className='github-flex'>
              <h3 className="my-2">Work Day Scheduler</h3>
              <a href="https://github.com/dhalladay/daily-calendar" target="_blank" rel="noreferrer" className="light link myt-2 mx-2"><BsGithub /></a>

              </div>
              <a href="https://dhalladay.github.io/daily-calendar/" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/Work-Day-Scheduler.png`)} alt="screenshot and link to workday scheduler application" className="project-img rounded" />
              </a>
            </div>
            <div className="prj-card">
              <div className='github-flex'>
              <h3 className="my-2">Run-buddy</h3>
              <a href="https://github.com/Hone12345678/worthIt" target="_blank" rel="noreferrer" className="light link myt-2 mx-2"><BsGithub /></a>

              </div>
                <a href="https://worth-it-2022.herokuapp.com/" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/WorthIt.png`)} alt="screenshot and link to run-buddy, a guided html and css example" className="project-img rounded" />
              </a>
            </div>
            <div className="prj-card">
              <div className='github-flex'>
              <h3 className="my-2">Weather API Dashboard</h3>
              <a href="https://github.com/dhalladay/travel-weather-dashboard" target="_blank" rel="noreferrer" className="light link myt-2 mx-2"><BsGithub /></a>

              </div>
              <a href="https://dhalladay.github.io/travel-weather-dashboard/" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/weather-dashboard-screenshot.png`)} alt="screenshot and link a weather dashboard" className="project-img rounded mx-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;