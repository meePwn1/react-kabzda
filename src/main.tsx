import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './s1-main/App'
import store from './s2-homeworks/hw10/bll/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		{/*для дз 10*/}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
