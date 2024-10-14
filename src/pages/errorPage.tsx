export default function ErrorPage() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
				<p className="text-gray-600 mb-6">
					Sorry, the page you're looking for doesn't exist or has been moved.
				</p>
				<a
					href="/"
					className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 transition duration-300"
				>
					Go Back Home
				</a>
			</div>
		</div>
	);
}
