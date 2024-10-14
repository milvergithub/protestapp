"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ closeButton, ...props }: ToasterProps) => {
	const { theme = "system" } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			toastOptions={{
				unstyled: true,
				closeButton: closeButton,
				classNames: {
					toast:
						"flex items-center p-4 gap-2 w-full rounded-md shadow-lg border-0 ring-1 ring-inset",
					info: "group info bg-primary-container text-on-primary-container ring-primary",
					success: "group success bg-success-container text-on-success-container ring-success",
					warning: "group warning bg-warning-container text-on-warning-container ring-warning",
					error: "group error bg-error-container text-on-error-container ring-error",
					title: "text-bold text-sm",
					description: "text-xs",
					closeButton:
						"border-0 ring-1 ring-inset group-[.info]:bg-primary-container group-[.info]:text-on-primary-container group-[.info]:ring-primary group-[.success]:bg-success-container group-[.success]:text-on-success-container group-[.success]:ring-success group-[.warning]:bg-warning-container group-[.warning]:text-on-warning-container group-[.warning]:ring-warning group-[.error]:bg-error-container group-[.error]:text-on-error-container group-[.error]:ring-error",
					actionButton: "",
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
