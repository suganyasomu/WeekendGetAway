import React from "react";

function Description(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.description }} />;
}

export default Description;
