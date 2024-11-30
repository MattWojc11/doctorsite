'use client'

import { ButtonHTMLAttributes } from 'react'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-colors duration-200'
  const variants = {
    primary: 'bg-[#F5B195] hover:bg-[#f3a07f] text-white',
    secondary: 'bg-[#0B6B5D] hover:bg-[#095446] text-white'
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  if (href) {
    return (
      <Link 
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
} 