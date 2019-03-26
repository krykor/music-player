import React from 'react'
import './Playlist.css'

import PlaylistContext from '../../data/PlaylistContext'

const Playlist = ({ changeId }) => {
	return (
		<PlaylistContext.Consumer>
			{({ playlists }) =>
				playlists.map(
					({ title, author, photo, id }, index) =>
						index < 4 && (
							<div className="playlist" key={title} onClick={() => changeId(id)}>
								<img src={photo.url} />
								<div className="songData">
									<p>{title}</p>
									<p>{author}</p>
								</div>
							</div>
						)
				)
			}
		</PlaylistContext.Consumer>
	)
}

export default Playlist
