import React, {Fragment} from 'react'


const Card = ({name, email, id}) => {

  return (
    <Fragment>

    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt='robots' src= {`https://robohash.org/${id}`}/>
    <h2>  {name}     </h2>
    <p> {email} </p>
    </div>

    </Fragment>



  )



}
















export default Card
