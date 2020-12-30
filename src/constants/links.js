import React, { useContext } from "react";
import { Link } from "gatsby";
import { MenuContext } from "../context/MenuContext"

const Links = ({ styleClass }) => {
  const { menuState, setMenuState } = useContext(MenuContext);
  const data = [
    {
      id: 1,
      text: "home",
      url: "/",
    },
    {
      id: 2,
      text: "Professionnel Career and skills",
      url: "#career",
    },
    {
      id: 3,
      text: "My work and creations",
      url: "#creations",
    },
    {
      id: 4,
      text: "Contact informations",
      url: "#contact",
    },
  ]

  const tempLinks = data.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url} onClick={() => setMenuState(!menuState)}>
          {link.text}
        </Link>
      </li>
    )
  });

  return (
    <ul className={`page-link ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )

}

export default Links;