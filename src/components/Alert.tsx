interface AlertProps {
    children: React.ReactNode;
    title: string;
    variant: "info" | "success" | "warning" | "error";
    dismissible?: boolean;
    onDismiss?: () => void; // Made optional to fix the App.tsx error
}

export default function Alert({
    children,
    title,
    variant = "info",
    dismissible,
    onDismiss
}: AlertProps) {
    const variants = {
        info: "bg-blue-50 text-blue-800",
        success: "bg-green-50 text-green-800",
        warning: "bg-yellow-50 text-yellow-800",
        error: "bg-red-50 text-red-800",
    };

    return (
        <div role="alert"
            className={`border-l-4 rounded-r-lg p-4 ${variants[variant]}`}>
            <div className="flex justify-between items-start">
                <div>
                    {title && (
                        <p className="font-semibold mb-1">{title}</p>
                    )}
                    <p className="text-sm">{children}</p>
                </div>
                {dismissible && (
                    <button onClick={onDismiss}
                        className="ml-4 opacity-60 hover:opacity-100"
                        aria-label="Kapat">
                        &#10005;
                    </button>
                )}
            </div>
        </div>
    );
}