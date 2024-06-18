import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SuperAdminLayout } from 'pages/superAdminLayout';
import { paths } from 'const/paths';
import { SharedLayout } from 'pages/sharedLayout';

const UserListPage = lazy(() => import('pages/userListPage'));
const ViewUserProfilePage = lazy(() => import('pages/viewUserProfilePage'));
const HomePage = lazy(() => import('pages/homePage'));
const SignUpPage = lazy(() => import('pages/signUpPage'));
const SignInPage = lazy(() => import('pages/signInPage'));
const RestorePasswordPage = lazy(() => import('pages/restorePassPage'));
const PrivacyPolicyPage = lazy(() => import('pages/privacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('pages/termsOfUsePage'));
const ConfirmCredentialsPage = lazy(
  () => import('pages/confirmCredentialsPage'),
);
const NewPassPage = lazy(() => import('pages/newPassPage'));
const VerifyOtpPAge = lazy(() => import('pages/verifyOtpPage'));
const VerifyEmailPAge = lazy(() => import('pages/verifyEmailPage'));
const FillProfilePage = lazy(() => import('pages/fillProfilePage'));

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
          <Route path={paths.privacyPolicy} element={<PrivacyPolicyPage />} />
          <Route path={paths.newPassword} element={<NewPassPage />} />
          <Route path={paths.verifyOtp} element={<VerifyOtpPAge />} />
          <Route path={paths.verifyEmail} element={<VerifyEmailPAge />} />
          <Route path={paths.fillProfile} element={<FillProfilePage />} />
          <Route path={paths.termsOfUse} element={<TermsOfUsePage />} />
          <Route
            path={paths.confirmCredentials}
            element={<ConfirmCredentialsPage />}
          />
        </Route>
        <Route path={paths.superAdminRoot} element={<SuperAdminLayout />}>
          <Route path={paths.userList} element={<UserListPage />} />
          <Route
            path={`${paths.viewUserProfile}:id`}
            element={<ViewUserProfilePage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
