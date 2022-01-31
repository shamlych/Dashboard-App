import React from 'react';
import './TrafficInfo.css'

function TrafficInfo({done, color}) {
    const [style, setStyle] = React.useState({});
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
			background: color
		}
		
		setStyle(newStyle);
	}, 200);
    return (
      <div>
        <div className="progress">
			<div className="progress-done" style={style}>
			</div>
		</div>
      </div>
  );
}

export default TrafficInfo;
