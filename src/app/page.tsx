"use client"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()

  if (localStorage.getItem('token')) {
    router.replace('/dashboard')
    console.log(localStorage.getItem('token'));
    
  } else {
    router.replace('/login')
  }

  return (
    
    <div>
      root directory
    </div>
  )
}