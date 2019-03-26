import React from 'react'
import './Playlist.css'

import { Consumer } from '../../data/PlaylistContext'

const Playlist = () => {
	return (
		<Consumer>
			{({ playlists }) =>
				playlists.map(
					({ title, author, photo }, index) =>
						index < 4 && (
							<div className="playlist" key={title}>
								<img src={photo.url} />
								<div className="songData">
									<p>{title}</p>
									<p>{author}</p>
								</div>
							</div>
						)
				)
			}
		</Consumer>
	)
}

export default Playlist
