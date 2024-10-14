export interface Comment {
	postId: number; // The ID of the post associated with the comment
	id: number; // The unique ID of the comment
	name: string; // The name of the person who made the comment
	email: string; // The email of the person who made the comment
	body: string; // The content of the comment
}
