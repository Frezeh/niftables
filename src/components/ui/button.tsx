import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size?: "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={`[&>span]:hover:translate-y-0 [&>span:nth-child(2)]:hover:translate-y-[-101%] [&>span:nth-child(2)]:hover:p-2 
        relative overflow-hidden inline-flex items-center justify-center rounded-md text-lg font-bold 
        text-white disabled:pointer-events-none disabled:opacity-50  hover:border-primary-blue font-satoshi
        ${
          variant === "primary" &&
          "bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] hover:to-[#3D8BFF]"
        } ${
          variant === "secondary" && "border-[2px] border-primary-white"
        } ${className}`}
        ref={ref}
      >
        <span
          className={`absolute inset-0 bg-primary-blue transition-transform duration-[0.2s] ease-[ease-in] 
          translate-y-[101%] ${
            variant === "primary" && size === "sm" && "p-2"
          } ${variant === "primary" && size === "lg" && "p-3"}`}
          {...props}
        />
        <span
          {...props}
          className="transition-transform duration-[0.2s] ease-[ease-in] translate-y-0"
        />
      </button>
    );
  }
);

Button.displayName = "Button";
