import React, { useContext, useEffect } from 'react'

import Context from '../../data/PlaylistContext'

import audio from '../../assets/audio/sample.mp3'

const Audio = () => {
	const { isPlay, changeSongTime, songTime, songIndex } = useContext(Context)

	const getTime = (time) =>
		!isNaN(time) && Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)

	useEffect(() => {
		//let audio222 = document.getElementById('audio')
		/*audio.addEventListener('timeupdate', (e) => {
			changeSongTime({
				//currentTime: getTime(e.target.currentTime),
				duration: getTime(e.target.duration)
				//animationTime: e.target.duration
			})
		})*/

		/*changeSongTime({
			//currentTime: getTime(e.target.currentTime),
			duration: getTime(audio222 && audio222.duration)
			//animationTime: e.target.duration
		})*/

		/*const audioFunction = (e) => {
			changeSongTime({
				//currentTime: getTime(e.target.currentTime),
				duration: getTime(e.target.duration)
				//animationTime: e.target.duration
			})
			console.log('ok')
		}*/

		///isPlay ? audio && audio.play() : audio && audio.pause()
		console.log(audio)
	}, [isPlay])

	useEffect(() => {
		//let audio22 = document.getElementById('audio')
		/*changeSongTime({
			duration: getTime(audio && audio.duration)
		})*/
		//console.log(audio && audio.duration)
	}, [songIndex])

	//setTimeout(console.log(audio222 && audio222.duration), 4000)

	return (
		<audio playing="true" id="audio">
			<source src={audio} type="audio/mpeg" />
		</audio>
	)
}

export default Audio
