import React from "react";
export default function Button(props) {
  let { action, title } = props;
  return <button 
  style={{backgroundColor:'#b148d2',margin:8,borderRadius:4,borderWidth: 1}} 
  
  onClick={action}>{title}</button>;
}

