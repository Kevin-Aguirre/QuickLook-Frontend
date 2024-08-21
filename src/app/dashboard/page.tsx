"use client"
import Loading from "@/components/Loading"
import Navbar from "@/components/Navbar"
import DashboardBody from "./DashboardBody"
import React, { useState, useEffect } from "react"
import { PhraseSet, User } from "@/lib/interfaces"
import { useRouter } from "next/navigation"


const UserComponent: React.FC = () => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [sets, setSets] = useState<PhraseSet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      const userToken = localStorage.getItem('token')

      console.log("user token: ", userToken);
      

      if (!userToken) {
        router.replace("/login")
        return;
      }

      const response = await fetch(`http://localhost:8080/api/v1/user/${userToken}`);     
      
      if (!response.ok) {
        throw new Error("failed to fetch user data")
      }
      
      const data: User = await response.json();
      setUser(data);
    } catch(e) {
      setError("failed to fetch user data ")
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/set/${localStorage.getItem('token')}`)

        // console.log(data);
        if (!response.ok) {
          throw new Error('failed')
        }

        const data: PhraseSet[] = await response.json()
        
        setSets(data);
      } catch (e) {
        setError('failed!')
      } finally {
        setLoading(false)
      }
    }
    

    fetchUser();
  }, []);

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <Navbar />
      <DashboardBody
        user={user}
        sets={user?.phraseSets || []} // Provide an empty array if `phraseSets` is null or undefined
        fetchUser={fetchUser}
      />
    </div>
  );
};
  
export default UserComponent;