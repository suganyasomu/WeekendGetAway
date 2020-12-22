import React from "react";

function Fee(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.fee }} />;
}

export default Fee;
