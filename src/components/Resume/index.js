function Resume() {
  const frontEnd = [
    "HTML", "CSS", "Boostrap", "Tailwind", "Javascript", "JQuery", "React"
  ]

  const backEnd = [
    "API requests", "Node", "Express", "MySQL", "Sequelize", "MongoDb", "Mongoose", "Graphql", "REST"
  ]

  return (
    <div>
      <h3>Proficiencies</h3>
      <h4>Front-end: </h4>
      <ul>
      {frontEnd.map(front => (
        <li className="mx-2" key={front}>
          {front}
        </li>
      ))}
      </ul>
      <h4>Back-end: </h4>
      <ul>
      {backEnd.map(back => (
        <li className="mx-2" key={back}>
          {back}
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Resume;