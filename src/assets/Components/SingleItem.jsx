import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const SingleItem = ({id, name, image, banner, artist, song, idPath}) => {
  return (
    <>
    <Link to={`${idPath}/${id}`} className="single-item">
      <div className="sigle-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Image of the artist ${name}`} />
        </div>
        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>


      <div className="single-item__texts">
        <p className="single-item__title">{name}</p>
        <p className="single-item__type">
          {/* nullish code */}
          {artist ?? "Artista" }    
        </p>
      </div>
   
      </Link>
      </>


     
  )
}


export default SingleItem;
