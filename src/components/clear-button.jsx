import React from 'react';
import '../styles/clear-button.css'

const ClearButton = ({ clearHandler }) => (
  <div
    className="clear-button"
    onClick={clearHandler}>

    Clear
  </div>
)

export default ClearButton;
