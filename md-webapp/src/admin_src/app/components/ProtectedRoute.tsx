import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export function ProtectedRoute({ children }: Props) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
}