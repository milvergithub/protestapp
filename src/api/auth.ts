import { AuthRequest } from "@/models/request/authRequest.ts";
import { AuthResponse } from "@/models/response/authResponse.ts";

export const authenticateAsync = ({ username, password }: AuthRequest): Promise<AuthResponse> => {
	return new Promise((resolve, reject) => {
		// Simulate an API call
		setTimeout(() => {
			if (username === "prologin@prologin.com" && password === "ProLogin123456") {
				// Simulate successful login
				resolve({
					message: "Login successful",
					token: "fake-jwt-token", // Simulated JWT token
				});
			} else {
				// Simulate authentication failure
				reject({
					message: "Invalid username or password",
				});
			}
		}, 1000); // Simulate 1 second delay
	});
};
