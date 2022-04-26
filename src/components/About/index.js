function About() {
  return (
    <section className="container-fluid">
    <div className="flex-row flex-wrap w-100">
      <div className="col-sm-12 col-lg-6">
      <img className="mx-5 rounded my-2 img-self" src={require(`../../assets/images/profile-pic.jpg`)} alt="Dave laughing"></img>
      </div>
      <div className="about-text col-sm-12 col-lg-5">
      <h2 className="light">about me:</h2>
      <p className="light">My name is David Halladay. I've worked in Systems Support for the last few years. As an analyst I would assist our dev team and front end users bug-check and problem solve various primary and third party software packages. I recently completed a full stack web dev bootcamp with the University of Utah and hope to combine that and my personal work experience and become a full stack developer.</p>
      </div>
      </div>
    </section>
  );
}

export default About;