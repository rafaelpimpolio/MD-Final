import { Navigate } from "react-router-dom";

export default function ProtectedEmployeeRoute({
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

  // NOT EMPLOYEE
  if (user.role !== "employee") {
    return <Navigate to="/" />;
  }

  return children;
}