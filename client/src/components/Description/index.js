import React from "react";

function Description(props) {
  return <span dangerouslySetInnerHTML={{ __html: props.description }} />;
}

export default Description;
