import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './utils/axiosConfig'

const container = document.getElementById('root')
if (!container) {
    throw new Error("Root element 'root' not found. Check your HTML file.")
}

const root = createRoot(container)
root.render(<App />)
