import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function LoginLayout() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-background-container">
			<div className="max-w-md w-full p-6 bg-background rounded-lg shadow-md">
				<Suspense fallback={<div>loading</div>}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	);
}
