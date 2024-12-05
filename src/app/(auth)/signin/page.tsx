'use client'

import { signIn } from '@/app/api/auth/signIn'
import { FormEvent } from 'react'
// import { useRouter } from 'next/navigation'
 
export default function SignInPage() {
//   const router = useRouter()
 
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    console.log('login');
    
    await signIn(email, password);  
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}