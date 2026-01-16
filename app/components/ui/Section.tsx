import { cn } from "@/app/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: "white" | "light" | "dark";
}

export function Section({
    children,
    className,
    id,
    background = "white",
    ...props
}: SectionProps) {
    const bgColors = {
        white: "bg-white",
        light: "bg-[var(--background)]", // Off-white
        dark: "bg-[var(--primary)] text-white",
    };

    return (
        <section
            id={id}
            className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full ${bgColors[background]} ${className || ""}`}
            {...props}
        >
            <div className="max-w-7xl mx-auto w-full">
                {children}
            </div>
        </section>
    );
}
