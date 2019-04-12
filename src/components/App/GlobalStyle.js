import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	#root {
		background-color: #faf5fe;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
	    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
		'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
    }
`

export default GlobalStyle
