import TodoPage from '@/pages/todo'
import { Route, Routes } from 'react-router-dom'

import './styles/globals.css'

function App() {
  return (
    <Routes>
      {TodoPage.map((paths, i) => (
        <Route key={i} path={paths.path} element={paths.element} />
      ))}
    </Routes>
  )
}

export default App
