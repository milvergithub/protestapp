import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { lazy } from "react";
import LoginLayout from "@/components/layout/loginLayout.tsx";
import ErrorPage from "@/pages/errorPage.tsx";
import RequireAuth from "@/components/requireAuth.tsx";
import MainLayout from "@/components/layout/mainLayout.tsx";

const LoginPage = lazy(() => import("@/pages/auth/loginPage.tsx"));
const DashboardPage = lazy(() => import("@/pages/dashboard/dashboardPage.tsx"));

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route errorElement={<ErrorPage />}>
			<Route path="/" element={<Navigate to="/dashboard" />} />

			<Route element={<LoginLayout />}>
				<Route path="login" element={<LoginPage />} />
			</Route>

			<Route element={<RequireAuth />}>
				<Route element={<MainLayout />}>
					<Route path="dashboard">
						<Route index={true} element={<DashboardPage />} />
					</Route>
				</Route>
			</Route>
		</Route>,
	),
);
