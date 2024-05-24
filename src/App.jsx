import './index.scss'
import { Routes, Route } from 'react-router-dom'
import { MainPage} from './pages/MainPage'
import { UsersPage} from './pages/UsersPage'
import { UserProfilePage } from './pages/UserProfilePage'
import { NotFoundPage } from './pages/NotFoundPage'



function App() {

  
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
     
    </div>
  )
}

export default App
