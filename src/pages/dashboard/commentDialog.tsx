import { Dialog, DialogContent } from "@/components/ui/dialog.tsx";
import { Comment } from "@/models/response/comment.ts";

type Props = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	comment: Comment;
};
export default function CommentDialog({ open, onOpenChange, comment }: Props) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<div className="max-w-md mx-auto  p-6 mb-4">
					<div className="mb-4">
						<h3 className="text-xl font-semibold text-gray-800">Comment ID: {comment.id}</h3>
						<p className="text-sm text-primary">By: {comment.name}</p>
						<p className="text-sm text-secondary-foreground">Email: {comment.email}</p>
					</div>
					<p className="text-secondary-foreground">{comment.body}</p>
				</div>
			</DialogContent>
		</Dialog>
	);
}
