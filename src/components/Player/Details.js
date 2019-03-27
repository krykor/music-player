import React from 'react'

const Details = ({ filteredData }) => {
	const { title, author, photo } = filteredData

	return (
		<div className="song-info-container-top">
			<div className="song-info-flex">
				<img className="cover-img" src={photo.url} />
				<img className="cover-img-blur" src={photo.url} />
			</div>

			<div className="info">
				<p>{title}</p>
				<p>{author}</p>
			</div>
		</div>
	)
}

export default Details
