import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/main/MainPage'
import { useState, useEffect, useRef, useCallback } from 'react'
import HistoryPage from './pages/histroy/HistoryPage'
import { useCookies } from 'react-cookie'
import { Image, ImageCache } from './interfaces'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path='history' element={<HistoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
