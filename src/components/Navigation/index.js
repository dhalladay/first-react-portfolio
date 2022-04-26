function Navigation(props) {

  const currentPage = props.currentPage

  const selection = ['about', 'portfolio', 'contact', 'resume']

  return (
    <nav className="container-fluid col-lg-6">
      <ul className="flex-row">
        {selection.map(selection => (
          <li className={`mx-1 ${
            props.currentPage === selection && !currentPage && `navActive`
            }`} key={selection}>
            <a
              href={"#" + selection}
              onClick={() => props.setCurrentPage(selection)}
            >
              {selection}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;