import { Routes, Route, Navigate } from 'react-router-dom'

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<span> Home Page</span>} />
        <Route path="/profile" element={<span> profile Page</span>} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
        
    )
}

export default AppRoutes
