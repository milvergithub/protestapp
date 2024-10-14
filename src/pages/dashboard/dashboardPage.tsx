import { useGetComments } from "@/hooks/useComment.ts";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Comment } from "@/models/response/comment.ts";
import CommentDialog from "@/pages/dashboard/commentDialog.tsx";

export default function DashboardPage() {
	const [openComment, setOpenComment] = useState<Comment>();
	const { data } = useGetComments();

	return (
		<div>
			<Table classNameWrapper="max-h-[82vh]">
				<TableCaption>A list of comments.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>ID</TableHead>
						<TableHead>NAME</TableHead>
						<TableHead>EMAIL</TableHead>
						<TableHead className="text-right"></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data?.map((item, index) => (
						<TableRow key={index}>
							<TableCell>{item.id}</TableCell>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell className="text-right">
								<Button variant="ghost" onClick={() => setOpenComment(item)}>
									<Eye />
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			{openComment && (
				<CommentDialog
					open={!!openComment}
					onOpenChange={() => setOpenComment(undefined)}
					comment={openComment}
				/>
			)}
		</div>
	);
}
