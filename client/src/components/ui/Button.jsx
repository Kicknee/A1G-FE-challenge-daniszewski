import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonStyles = cva(
  "btn d-flex align-items-center justify-content-center",
  {
    variants: {
      variant: {
        primary: "btn-primary w-100 mt-2 mb-3 py-1 lh-lg fs-5 shadow",
        icon: "btn-gray rounded-circle",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Button = ({
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
  iconClass,
  onClick,
  children,
}) => {
  const isIconOnly = !!iconClass && !children;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(buttonStyles({ variant }), className)}
      style={isIconOnly ? { width: 42, height: 42 } : undefined}
    >
      {iconClass && <i className={`bi ${iconClass}`} />}
      {children && <span className={iconClass ? "ms-2" : ""}>{children}</span>}
    </button>
  );
};

export default Button;
