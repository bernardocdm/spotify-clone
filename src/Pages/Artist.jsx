import { faCircle, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Artist = () => {
  return (
    <div>
      <div  className="artist__header" 
      style={{ 
        backgroundImage: "linear-gradient(to bottom, var(--_shade), var(--_shade)),url(https://i.scdn.co/image/ab67618600001016909a162796dbc3629a1fadeb)"
      }}
      >
        <h2>Jorge e Matheus</h2>
      </div>
        <div className="artist__body" ></div>
        
        <Link to="/song/1">
        <FontAwesomeIcon 
        className="single-item__icon single__icon--artist"
        icon={faCirclePlay}
        />
        </Link>  
      </div>
  )
}

export default Artist;
