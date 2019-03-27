import React, { useState } from 'react'

import next from '../../assets/Next.svg'
import pause from '../../assets/Pause.svg'
import play from '../../assets/Play.svg'
import previous from '../../assets/Previous.svg'

const Controls = ({ initialStatus }) => {
	const [isPlay, updateStatus] = useState(initialStatus)

	const buttonStatus = isPlay ? play : pause

	const buttonArray = [previous, buttonStatus, next]

	return (
		<div className="song-info-container-bottom">
			<div className="buttons">
				{buttonArray.map((button) => (
					<img
						key={button}
						src={button}
						className="buttons-img"
						onClick={() => updateStatus(isPlay === true ? false : true)}
					/>
				))}
			</div>
			<div>timeline</div>
		</div>
	)
}

export default Controls
