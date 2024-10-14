import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { retryQuery } from "@/utils/query.ts";
import { authenticateAsync } from "@/api/auth.ts";
import { AuthRequest } from "@/models/request/authRequest.ts";
import { AuthResponse } from "@/models/response/authResponse.ts";

export function useAuthenticate() {
	return useMutation<AuthResponse, AxiosError, AuthRequest>({
		mutationFn: async (request) => await authenticateAsync(request),
		retry: retryQuery,
	});
}
