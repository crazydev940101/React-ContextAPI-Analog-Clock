import React from 'react'
import { createRoot } from 'react-dom/client'
import { Application } from './application/Application'
import './index.css'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  )
} else {
  console.error('Element with ID root not found')
}
