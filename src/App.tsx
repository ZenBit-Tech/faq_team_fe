import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './pages/sharedLayout';
const HomePage = lazy(() => import('./pages/homePage/index'));
const SignUpPage = lazy(() => import('./pages/signUpPage'));
const SignInPage = lazy(() => import('./pages/signInPage'));
const RestorePasswordPage = lazy(() => import('./pages/restorePasswordPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/privacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('./pages/termsOfUsePage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/restore-password" element={<RestorePasswordPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
