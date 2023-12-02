import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "[&>span]:hover:translate-y-0 [&>span:nth-child(2)]:hover:translate-y-[-100%] [&>span:nth-child(2)]:hover:p-2 relative overflow-hidden inline-flex items-center justify-center rounded-md text-lg font-bold z-20 text-white disabled:pointer-events-none disabled:opacity-50 hover:border-primary-blue transition-opacity duration-[250ms] ease-out",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] hover:to-[#3D8BFF]",
        secondary: "border-[2px] border-primary-white",
      },
      size: {
        sm: "hover:bg-primary-blue",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
      >
        <span
          className={`absolute inset-0 transition-transform duration-[250ms] ease-out translate-y-[100%] pt-2 lg:pt-3`}
          {...props}
        />
        <span
          {...props}
          className="transition-transform duration-[250ms] ease-out translate-y-0"
        />
      </button>
    );
  }
);

Button.displayName = "Button";
