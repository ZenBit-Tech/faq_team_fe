import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './pages/sharedLayout';
import { paths } from 'const/paths';
const HomePage = lazy(() => import('pages/homePage'));
const SignUpPage = lazy(() => import('pages/signUpPage'));
const SignInPage = lazy(() => import('pages/signInPage'));
const RestorePasswordPage = lazy(() => import('pages/restorePassPage'));
const PrivacyPolicyPage = lazy(() => import('pages/privacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('pages/termsOfUsePage'));
const NewPasswordPage = lazy(() => import('pages/newPassPage'));
const VerifyOtpPage = lazy(() => import('pages/verifyOtpPage'));
const VerifyEmailPage = lazy(() => import('pages/verifyEmailPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path={paths.root} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={paths.signUp} element={<SignUpPage />} />
          <Route path={paths.signIn} element={<SignInPage />} />
          <Route
            path={paths.restorePassword}
            element={<RestorePasswordPage />}
          />
          <Route path={paths.newPassword} element={<NewPasswordPage />} />
          <Route path={paths.privacyPolicy} element={<PrivacyPolicyPage />} />
          <Route path={paths.termsOfUse} element={<TermsOfUsePage />} />
          <Route path={paths.verifyOtp} element={<VerifyOtpPage />} />
          <Route path={paths.verifyEmail} element={<VerifyEmailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
