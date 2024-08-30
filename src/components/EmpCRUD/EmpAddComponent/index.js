import React from 'react'

const EmpAddComponent = ({ setIsAdding }) => {
  return (
    <div
      onClick={() => setIsAdding(false)}
    >EmpAddComponent</div>
  )
}

export default EmpAddComponent;