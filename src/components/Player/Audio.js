import React, { useContext, useEffect, useRef } from 'react'

import Context from '../../data/PlaylistContext'

import audio from '../../assets/audio/sample.mp3'

function Audio() {
	const player = useRef()

	const { isPlay, changeSongTime, songIndex, checkAnimationTime } = useContext(Context)

	useEffect(() => {
		if (audio) {
			player.current.src = audio
		}

		return () => {
			if (audio) {
				player.current.src = null
			}
		}
	}, [songIndex])

	useEffect(() => {
		isPlay === 'playing' && checkAnimationTime(player.current.duration)

		player.current.addEventListener('timeupdate', (e) => {
			changeSongTime({
				currentTime: e.target.currentTime,
				duration: e.target.duration
			})
		})

		if (isPlay === 'stopped') {
			player.current.pause()
			player.current.currentTime = 0
		} else if (isPlay === 'playing') {
			player.current.play()
		} else {
			player.current.pause()
		}

		return () => {
			player.current.removeEventListener('timeupdate', () => {})
			player.current.pause()
		}
	}, [isPlay])

	return <audio ref={player} />
}

export default Audio
