import React from 'react'
import sun from '../../Assets/sun.svg'
import '../Days1/Days1.css'

const Days1 = () => {
  return (
    <div>
      <div className='days_containerr'>
        <div className='container_topp'>
            <h3>Friday</h3>
        </div>
        <div className='container_middlee'>
            <img src={sun} height="60px" width="60px" />
        </div>
        <div className='container_bottomm'>
            <h3>21 C</h3>
        </div>
    </div>
    </div>
  )
}

export default Days1
