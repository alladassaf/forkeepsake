import React from 'react'

function ErrMsg({ valid, errMsg }) {
  return (
    <div className={valid ? 'err active' : 'err innactive'}>
        <p>{ errMsg }</p>
    </div>
  )
}

export default ErrMsg