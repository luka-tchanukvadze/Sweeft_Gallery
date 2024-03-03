import { useEffect, useRef, useState } from 'react'
import ImageViewer from '../../components/ImageViewer/ImageViewer'
import useLocalStorage from '../../hooks/useLocalStorage'

function HistoryPage({ loading, resetSearch }: any) {
  const [query, setQuery] = useState('')
  const [history, setHistory] = useLocalStorage<string[]>('history', [])

  const handleSelection = (selection: string) => {
    resetSearch()
  }

  return (
    <div className='container' style={{ marginBottom: '19rem' }}>
      <h1 className='title'>Your history</h1>
      {/* {errorMsg && <p className='error-msg'>{errorMsg}</p>} */}

      <div className='filters'>
        <div onClick={() => handleSelection('nature')}>nature</div>
        <div onClick={() => handleSelection('birds')}>birds</div>
        <div onClick={() => handleSelection('cats')}>cats</div>
      </div>

      <div>
        {history.map((searchedQuery) => (
          <button onClick={() => setQuery(searchedQuery)} key={searchedQuery}>
            {searchedQuery}
          </button>
        ))}
      </div>

      {query && <ImageViewer query={query} />}

      {loading && (
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3rem',
          }}
        >
          loading...
        </div>
      )}
    </div>
  )
}

export default HistoryPage
