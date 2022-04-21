function Resume() {
  const frontEnd = [
    "HTML", "CSS", "Boostrap", "Tailwind", "Javascript", "JQuery", "React"
  ]

  const backEnd = [
    "API requests", "Node", "Express", "MySQL", "Sequelize", "MongoDb", "Mongoose", "Graphql", "REST"
  ]

  return (
    <div className="light container-fluid">
      <h3 className="center-text">languages:</h3>
      <div className="flex-row">
        <div>
          <h4>front-end: </h4>
          <ul>
            {frontEnd.map(front => (
              <li className="mx-2 no-bull" key={front}>
                {front}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>back-end: </h4>
          <ul>
            {backEnd.map(back => (
              <li className="mx-2 no-bull" key={back}>
                {back}
              </li>
            ))}
          </ul>

        </div>
      </div>
      <a className="light center-text my-2 resume-link" href={require(`../../assets/docs/Resume-Portfolio.pdf`)} download>Download Resume</a>
    </div>
  )
}

export default Resume;