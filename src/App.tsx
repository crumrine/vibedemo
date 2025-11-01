import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UserPage from './components/UserPage';
import './App.css';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Vibe Demo</h2>
      <p>View user profiles by visiting:</p>
      <p>
        <code>/users/&lt;username&gt;</code>
      </p>
      <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
        User data is fetched from a public GitHub repository.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<UserPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
