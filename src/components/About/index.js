function About() {
  return (
    <section className="flex-row flex-wrap">
      <div className="col-5">
      <img className="rounded my-2" src={require(`../../assets/images/profile-pic.jpg`)} alt="Dave laughing"></img>
      </div>
      <div className="about-text col-5">
      <h2 className="light">About me:</h2>
      <p className="light">My name is David Halladay. I am have been working in Systems Support for the last five years. 
        During that time I have had the chance to learn about logic, organization as well as various programming and scripting languages and systems and have decided to use that experince to take the next step and become a full stack developer.</p>
      </div>
    </section>
  );
}

export default About;