import React from 'react'
import '../css/Loader.css'
import { Typography, Box } from '@mui/material'

const Loader = ({ text }) => {
	return <Box display="flex" sx={{ mt: 10, mb: 10 }}>
		<Box sx={{ width: '160px', justifyContent: "center", flex: 1 }}>
			<Typography
				align="center"
				sx={{ color: "white", fontWeight: 700, fontSize: 20, textShadow: "0 2px 1px rgba(145,51,54,0.5)" }}
			>
				{text}
			</Typography>
			<div className="loader" />
		</Box>
	</Box>
}

export default Loader
