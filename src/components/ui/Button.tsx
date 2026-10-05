import { ArrowUpRight } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  icon?: boolean
}

const styles = {
  primary: 'bg-brand text-white hover:bg-brand-deep',
  outline: 'border border-white/60 text-white hover:border-white hover:bg-white/10',
  ghost: 'text-charcoal hover:bg-surface',
  dark: 'bg-charcoal text-white hover:bg-brand',
}

const sizes = { sm: 'px-4 py-2 text-xs', md: 'px-5 py-3 text-xs', lg: 'px-6 py-4 text-sm' }

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-brand font-display font-bold uppercase tracking-[0.12em] transition duration-200 hover:-translate-y-0.5 ${styles[variant]} ${sizes[size]} ${className}`
  const content = (
    <>
      {children}
      {icon && <ArrowUpRight size={16} strokeWidth={2.5} />}
    </>
  )
  return href ? (
    <Link className={classes} to={href}>
      {content}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
