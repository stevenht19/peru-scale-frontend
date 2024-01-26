import { Routes } from 'consts/routes'
import { Link } from 'react-router-dom'
import React from 'react'

type AuthClientProps = {
  children: React.ReactNode
  title: string
  linkText: string
  linkMessage: string
  linkPath: Routes
}

export function AuthClientForm({ children, title, linkText, linkMessage, linkPath }: AuthClientProps) {
  return (
    <div className='max-w-xl mx-auto mt-7'>
      <h2 className='text-3xl font-bold'>{title}</h2>
      <p className='mt-2'>
        {linkMessage} <Link to={linkPath} className='text-blue-500 underline'>{linkText}</Link>
      </p>
      {children}
    </div>
  )
}
