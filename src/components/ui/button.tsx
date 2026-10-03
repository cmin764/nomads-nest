import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "rounded-md bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "rounded-md hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Pill - gold fill: primary CTAs (Book Now, Reserve)
        gold: "rounded-full bg-[var(--gold)] text-[var(--cream)] border-0 uppercase tracking-[.14em] text-[11px] font-normal hover:bg-[var(--gold-dk)] hover:scale-[1.02] active:scale-100",
        // Pill - navy outline: secondary CTAs (View Gallery, Get Directions)
        // Dark mode overrides applied via .btn-navy CSS class in globals.css
        navy: "btn-navy rounded-full bg-transparent border border-[var(--navy-mid)] text-[var(--navy-mid)] uppercase tracking-[.14em] text-[11px] font-normal hover:bg-[var(--navy-mid)] hover:text-[var(--cream)]",
      },
      size: {
        default: "h-10 px-[34px] py-[13px]",
        sm: "h-9 px-6 py-[10px]",
        lg: "h-12 px-10 py-[14px]",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
