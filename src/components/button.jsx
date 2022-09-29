import React from 'react';
import '../styles/button.css'

function Button({ children, clickHandler }) {

  const isOperator = value => {
    return isNaN(value) && (value !== ".") && (value !== "=")
  }

  return(
    <button
      className={`button-container ${isOperator(children) ? "operator" : ""}`.trim()}
      onClick={() => clickHandler(children)}>
      {children}
    </button>
  )
}

export default Button;
