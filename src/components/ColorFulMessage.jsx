import React  from "react";

export const ColorFulMessage = (props) => {
  const { color, children } = props
  const ContentColor = {
    color,
    fontSize: '18px',
  }

  return (
    <div>
      <p style={ContentColor}>{ children }</p>
    </div>
  )
}
