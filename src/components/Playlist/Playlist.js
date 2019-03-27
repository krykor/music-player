import React, { useContext } from 'react'
//import './Playlist.css'

import Context from '../../data/PlaylistContext'

const Playlist = () => {
	const { playlists, changeId } = useContext(Context)

	return playlists.map(
		({ title, author, photo, id }, index) =>
			index < 4 && (
				<div className="playlist" key={title} onClick={() => changeId(id)}>
					<img src={photo.url} alt={title} />
					<div className="songData">
						<p>{title}</p>
						<p>{author}</p>
					</div>
				</div>
			)
	)
}

export default Playlist
