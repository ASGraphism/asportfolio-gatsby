import React from "react";
import Abilitie from "../abilities/abilitie/abilitie"

import "./abilities.scss";



const AbilitiesArea = ({ data }) => {
  const abilities = data.items;

  return (
    <div className={`container-side l-side ${data.BackgroundColor ? "container-side-colored" : ""}`}>
      <h1>
        {data.Page_title}
        <span className="subtitle">
          {data.Page_subtitle}
        </span>
      </h1>
      {abilities.map(abilitie => (
        <div className="content-wrap">
          <Abilitie key={abilitie.node.id} title={abilitie.node.Abilitie_title} progress={abilitie.node.Skill_progress} />
        </div>
      ))}
    </div>
  )
}

export default AbilitiesArea