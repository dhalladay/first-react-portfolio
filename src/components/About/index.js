function About() {
  return (
    <section className="container-fluid">
      <div className="row flex-row flex-wrap">
        <div className="col-sm-12 col-lg-6 text-center pb-5">
          <img className="rounded my-2" src={require(`../../assets/images/profile-pic.jpg`)} alt="Dave laughing"></img>
        </div>
        <div className="about-text col-lg-6">
          <h2 className="light">about me:</h2>
          <p className="light ">My name is David Halladay. For the past 7+ years I worked as a Systems Support Business Analyst running and maintaining post-implementation proprietary and third party software. As an analyst I would run and review logs for scheduled tasks, troubleshoot bugs, test for accessibility, and assist both the dev team and front end users to resolve issues and problem solve to improve efficiency and the user experience. I recently completed a full stack web development bootcamp with the University of Utah combine that and my personal work experience and become a full stack developer. Check out my work and reach out with any questions. And of course, feel free to hire me!</p>
        </div>
      </div>
    </section>
  );
}

export default About;