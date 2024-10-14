import { createContext, useContext, useState, PropsWithChildren } from "react";

// Define the AuthResponse type
export interface AuthResponse {
	message: string;
	token: string;
}

// Define the shape of the context
interface AuthContextType {
	isAuthenticated: boolean;
	login: (data: AuthResponse) => void;
	logout: () => void;
	token: string | null;
}

// Create the AuthContext with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook to use the AuthContext
export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

// AuthProvider component to provide the context to the app
export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

	// Check if user is authenticated
	const isAuthenticated = !!token;

	// Function to log in, store the token in localStorage
	const login = (data: AuthResponse) => {
		localStorage.setItem("token", data.token);
		setToken(data.token);
	};

	// Function to log out, clear the token from localStorage
	const logout = () => {
		localStorage.removeItem("token");
		setToken(null);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>
			{children}
		</AuthContext.Provider>
	);
};
