interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    startIcon?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'disabled';
  }
  
  export default function Button({
    children,
    className = '',
    startIcon,
    variant = 'primary',
    ...buttonProps
  }: Readonly<ButtonProps>) {
    const typeClasses = {
      primary: 'bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg',
      secondary: 'text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors',
      disabled: 'bg-blue-400 cursor-not-allowed text-gray-600',
    };
  
    const buttonTypeClass = typeClasses[variant] || typeClasses.primary;
  
    const buttonClasses = `flex items-center gap-2 px-4 py-2 rounded-md ${buttonTypeClass} ${className}`;
  
    return (
      <button
        className={buttonClasses}
        disabled={variant === 'disabled'}
        {...buttonProps}
      >
        {startIcon || null}
        {children}
      </button>
    );
  }
  