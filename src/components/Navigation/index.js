function Navigation(props) {
  const selection = ['about', 'portfolio', 'contact', 'resume']

  return (
    <nav>
      <ul className="flex-row">
        {selection.map(selection => (
          <li className="mx-2" key={selection}>
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