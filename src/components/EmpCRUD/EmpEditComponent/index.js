import React from 'react'


const EmpEditComponent = ({ setIsEditing }) => {
  console.log(setIsEditing)
  return (
    <div
      onClick={() => setIsEditing(false)}
    >EmpEditComponent
    </div>
  )
}

export default EmpEditComponent;