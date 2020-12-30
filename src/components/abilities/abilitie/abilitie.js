import React from "react";

import "./abilitie.scss";


function Abilitie({ title, progress }) {
  return (
    <div>
      {title} <br /> {progress}
    </div>
  )
}

export default Abilitie