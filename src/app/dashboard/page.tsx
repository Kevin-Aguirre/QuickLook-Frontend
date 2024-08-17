"use client"

import EmptyNavbar from "@/components/EmptyNavbar"
import DashboardBody from "./DashboardBody"
import React, { useState, useEffect } from "react"
import { PhraseSet, User } from "@/lib/interfaces"


const UserComponent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [sets, setSets] = useState<PhraseSet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/user/1");     
      
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
        const response = await fetch(`http://localhost:8080/api/v1/set/1`)

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
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <EmptyNavbar />
      <DashboardBody
        user={user}
        sets={user?.phraseSets || []} // Provide an empty array if `phraseSets` is null or undefined
        fetchUser={fetchUser}
      />
    </div>
  );
};
  
export default UserComponent;