import axios from "axios";
import { API_URL } from "@/api/constant.ts";
import { Comment } from "@/models/response/comment.ts";

export const fetchComments = async (): Promise<Comment[]> => {
	const response = await axios.get<Comment[]>(API_URL);
	return response.data; // Return the array of comments
};
