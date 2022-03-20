function Resume() {
  const frontEnd = [
    "HTML", "CSS", "Boostrap", "Tailwind", "Javascript", "JQuery", "React"
  ]

  const backEnd = [
    "API requests", "Node", "Express", "MySQL", "Sequelize", "MongoDb", "Mongoose", "Graphql", "REST"
  ]

  return (
    <div className="light">
      <h3 className="center-text">Proficiencies</h3>
      <div className="flex-row">
        <div>
          <h4>Front-end: </h4>
          <ul>
            {frontEnd.map(front => (
              <li className="mx-2" key={front}>
                {front}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Back-end: </h4>
          <ul>
            {backEnd.map(back => (
              <li className="mx-2" key={back}>
                {back}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Resume;