import "react-toastify/dist/ReactToastify.css";

import * as S from "./styles";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { persistor, store } from "@/store/store";

import { AuthProvider } from "./providers/AuthProvider";
import { DailyInputPage } from "@/pages/DailyInputPage";
import { HistoryPage } from "@/pages/HistoryPage";
import { LoginPage } from "@/pages/LoginPage";
import { Navigation } from "@/widgets/Navigation";
import { PersistGate } from "redux-persist/integration/react";
import { ProfilePage } from "@/pages/ProfilePage";
import { Provider } from "react-redux";
import { ROUTES } from "@/shared/config/routes";
import { RegisterPage } from "@/pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import { ToastProvider } from "@/shared/ui/Toast/ToastContext";
import { useAuth } from "@/shared/lib/hooks/useAuth";

function AppContent() {
  const { user } = useAuth();

  if (user) {
    return (
      <>
        <div className="content-area">
          <Routes>
            <Route path={ROUTES.DAILY_INPUT} element={<DailyInputPage />} />
            <Route path={ROUTES.HISTORY} element={<HistoryPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path="*" element={<Navigate to={ROUTES.DAILY_INPUT} replace />} />
          </Routes>
        </div>
        <Navigation />
      </>
    );
  }

  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
    </Routes>
  );
}

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <ToastProvider>
            <BrowserRouter>
              <S.Container>
                <AppContent />
              </S.Container>
            </BrowserRouter>
          </ToastProvider>
        </AuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </PersistGate>
    </Provider>
  );
}
