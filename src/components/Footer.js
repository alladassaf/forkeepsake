import React from 'react'

function Footer() {

    const thisYear = new Date().getFullYear()

  return (
    <footer>
        <div className='logo'><span className='lower'>for</span>&nbsp;<span className='upper'>KeepSake</span></div>
        <div className='copyright'>&copy; forKeepSake LLC&nbsp;{thisYear}</div>
    </footer>
  )
}

export default Footer