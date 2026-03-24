export default function Button({
    children,
    variant = "primary",
    size = "md",
    onClick,
    disabled = false,
}: {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger" | "ghost";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    disabled?: boolean;
}) {
    const variants = {
        primary: `bg-blue-600 text-white hover:bg-blue-700`,
        secondary: `bg-gray-200 text-gray-800 hover:bg-gray-300`,
        danger: `bg-red-600 text-white hover:bg-red-700`,
        ghost: `bg-transparent text-gray-700 dark:text-gray-300
      hover:bg-gray-100 dark:hover:bg-gray-800`,
    };

    const sizes = {
        sm: `px-3 py-1.5 text-sm`,
        md: `px-4 py-2 text-base`,
        lg: `px-6 py-3 text-lg`,
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`rounded-lg font-medium transition-colors
        ${variants[variant]} ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
            {children}
        </button>
    );
}