import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button.tsx";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useAuthenticate } from "@/hooks/useAuth.ts";
import { AuthRequest } from "@/models/request/authRequest.ts";
import { AuthResponse } from "@/models/response/authResponse.ts";
import { toast } from "sonner";
import { useAuth } from "@/contexts/authProvider.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const formSchema = z.object({
	username: z.string().min(2, { message: "Username must be at least 2 characters long." }),
	password: z.string().min(6, { message: "Password must be at least 6 characters long." }),
});
type OutputType = z.output<typeof formSchema>;

export default function LoginForm() {
	const navigate = useNavigate();
	const { mutate: authenticate, isPending } = useAuthenticate();
	const { login, isAuthenticated } = useAuth();

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	function onSubmit(data: OutputType) {
		const request: AuthRequest = {
			username: data.username,
			password: data.password,
		};
		authenticate(request, {
			onSuccess: (data: AuthResponse) => {
				login(data);
				navigate("/");
			},
			onError: () => {
				toast.error("Username or password is invalid!");
			},
		});
	}

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}
	}, [isAuthenticated]);

	return (
		<>
			<h2 className="text-2xl font-semibold text-primary text-center mb-6">PRO Login</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input placeholder="Enter your username" {...field} className="w-full" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Enter your password"
										{...field}
										className="w-full"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full" disabled={isPending}>
						Login
					</Button>
				</form>
			</Form>
		</>
	);
}
