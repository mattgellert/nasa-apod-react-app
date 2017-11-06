import React from 'react'
import './PhotoCard.css'

const PhotoCard = ({onNext, onPrev, photo}) => {
  if (!!Object.keys(photo).length) {
    return(
      <div className="photo-card-container">
        <img className="button prev-button" src="./spaceship-prev.svg" onClick={onPrev} />
        <div className="photo-card-wrapper">
          <div className="photo-card">
            <div className="photo-info">
              <h2 className="title">{photo.title} - {photo.date}</h2>
              <div className="image-wrapper">
                <img className="image" src={photo.url}/>
                {photo.copyright && <div className="copyright">Courtesy of: {photo.copyright}</div>}
                <p className="explanation">{photo.explanation}</p>
              </div>
            </div>
          </div>
        </div>
        <img className="button next-button" src="./spaceship-next.svg" onClick={onNext} />
      </div>
    )
  }
  return null
}

export default PhotoCard
