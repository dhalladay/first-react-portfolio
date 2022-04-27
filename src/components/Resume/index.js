function Resume() {
  const frontEnd = [
    "HTML", "CSS", "Boostrap", "Tailwind", "Javascript", "JQuery", "React"
  ]

  const backEnd = [
    "Node", "Express", "SQL", "MySQL", "Sequelize", "MongoDb", "Mongoose", "Graphql", "RESTful API"
  ]

  return (
    <div className="light container-fluid">
      <h3 className="center-text">skills:</h3>
      <h4 className="text-center">2022 Coding Bootcamp Certificate - University of Utah</h4>
      <div className="badge-img mx-auto">
      <a href="https://www.credly.com/badges/cf696deb-e001-4981-ba43-d6caeb52239b/public_url" target="_blank" rel="noreferrer" className="project-link">
                <img src={require(`../../assets/images/coding-bootcamp-full-stack-developer-certificate.png`)} alt="University of Utah Coding Bootcamp certificate badge" className="project-img rounded" />
              </a>
      </div>
      <div className="row d-flex flex-row flex-wrap">
        <div className="col-6">
          <h4 className="text-end">front-end: </h4>
          <ul className="text-end">
            {frontEnd.map(front => (
              <li className="mx-2 no-bull" key={front}>
                {front}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-6">
          <h4>back-end: </h4>
          <ul className="p-0">
            {backEnd.map(back => (
              <li className="no-bull" key={back}>
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