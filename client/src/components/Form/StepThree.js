import React from 'react'
import Datetime from 'react-datetime'

function StepThree(props) {
  console.log(props) //REMOVE
  return (
    < div className = "fluid-container p-3 rounded shadow bg-white" >
      <div className='row text-center justify-content-center '>
        <div className='col-12'>
          <h2 className =""> Choose a date and time to send this pik-it </h2>
        </div>
        </div>
        <div className="row text-center justify-content-center "> 
        <div className='col-8'>
          <Datetime 
          // onChange={props.handleDateChanged}
          // value={props.date} 
          />
          {/* onChange={() => this.props.next(this.state)} */}  
        </div>
      </div>  
      <div className='row'>
          <div className='col-12'>
            <button className="btn btn-outline-dark btn-lg p-2" onClick={props.setPageBack}>Back</button>
            <button className="btn btn-outline-dark btn-lg p-2" onClick={props.submit}>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default StepThree
