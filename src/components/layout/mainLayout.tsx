import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { useAuth } from "@/contexts/authProvider.tsx";

export default function MainLayout() {
	const navigate = useNavigate();
	const { logout } = useAuth();
	return (
		<div className="flex flex-col h-screen">
			<nav className="bg-primary text-primary-foreground p-4 shadow-md">
				<div className="container flex justify-between items-center">
					<h1 className="text-lg font-bold">PRO Dashboard</h1>
					<div className="space-x-4">
						<Button
							variant="link"
							className="text-primary-foreground"
							onClick={() => {
								logout();
								navigate("/login");
							}}
						>
							Logout
						</Button>
					</div>
				</div>
			</nav>
			<main className="relative flex flex-col flex-1 p-10 gap-7 bg-background overflow-y-auto overflow-x-hidden">
				<Suspense>
					<Outlet />
				</Suspense>
			</main>
		</div>
	);
}
