import React, { useContext } from 'react'

import Context from '../../data/PlaylistContext'

const Details = () => {
	const { filteredList } = useContext(Context)

	const { title, author, photoS } = filteredList

	return (
		<div className="song-info-container-top">
			<div className="song-info-flex">
				<img className="cover-img" src={photoS.url} alt={title} />
				<img className="cover-img-blur" src={photoS.url} alt={`${title} - cover`} />
			</div>

			<div className="info">
				<p>{title}</p>
				<p>{author}</p>
			</div>
		</div>
	)
}

export default Details
