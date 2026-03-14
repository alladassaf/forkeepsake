import React from 'react'

function Option({ cat }) {

  return (
    <option>{ cat.indexOf('-') != -1 ? cat.replace("-", " ") : cat}</option>
  )
}

export default Option