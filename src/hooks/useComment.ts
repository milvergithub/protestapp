import { AxiosError } from "axios";
import { Comment } from "@/models/response/comment.ts";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "@/api/constant.ts";
import { retryQuery } from "@/utils/query.ts";
import { fetchComments } from "@/api/comment.ts";

export function useGetComments() {
	return useQuery<Comment[], AxiosError>({
		queryKey: [API_URL],
		queryFn: async () => await fetchComments(),
		enabled: true,
		retry: retryQuery,
	});
}
