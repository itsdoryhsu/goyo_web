interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}: ButtonProps) {
  const baseClasses = 'font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95'

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl hover:shadow-primary/25 shadow-primary',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200 hover:border-gray-300',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base'
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}