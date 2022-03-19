function Navigation(props) {
  const section = ['about', 'portfolio', 'contact', 'resume']

  return (
      <nav>
        <ul className="flex-row">
          {section.map(section => (
            <li className="mx-2" key={section}>
              <a 
                href={"#" + section}
                onClick={() => props.setCurrentPage(section)}
                >
                  {section}
              </a>
            </li>
          ))}
          {/* <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(true)}>
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contact" href="#contact" onClick={() => setContactSelected(true)}>
              Contact me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="#resume" onClick={() => setContactSelected(true)}>
              Resume
            </a>
          </li> */}
          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li> */}
          {/* ))} */}
        </ul>
      </nav>
  );
}

export default Navigation;