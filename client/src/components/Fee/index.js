import React from "react";

function Fee(props) {
  return <span dangerouslySetInnerHTML={{ __html: props.fee }} />;
}

export default Fee;
