import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  // NOT LOGGED IN
  if (!user) {
    return <Navigate to="/" />;
  }

  // NOT ADMIN
  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}