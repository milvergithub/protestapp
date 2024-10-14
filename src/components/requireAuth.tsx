import { useAuth } from "@/contexts/authProvider";
import { Navigate, Outlet } from "react-router-dom";

export default function RequireAuth() {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	return <Outlet />;
}
