import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

import MainPage from './pages/Main/indexMain';
import SignInPage from './pages/SignIn/indexSignIn';
import SignUpPage from './pages/SignUp/indexSignUp';

export default function App() {
    return (
      <>
        <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
            </Routes>
        </Router>
      </>
    );
  }
  