"use client"
import React, {useState, useEffect} from "react"
import EmptyNavbar from "@/components/EmptyNavbar"
import StudyBody from "./StudyBody"
import { User, PhraseSet } from "@/lib/interfaces"
import { useParams } from "next/navigation"

const Page : React.FC = () => {
    const [set, setSet] = useState<PhraseSet>()
    const {id} = useParams();
    console.log(id);
    

    // console.log(set);

    useEffect(() => {
        const fetchSet = async () => {
          const response = await fetch(`http://localhost:8080/api/v1/set/${id}`);        
          console.log(response);
          
          const data: PhraseSet = await response.json();
          setSet(data);
          
        };
    
        fetchSet();
      }, []);
  
    

    return (
        <>
            <EmptyNavbar/>
            {set ?  (
                <StudyBody
                    phraseSetId={set.phraseSetId}
                    phraseSetName={set.phraseSetName}
                    phrases={set.phrases}
                    dateAdded={set.dateAdded}
                />
            ) : (
                <div>
                    fuck
                </div>
            )}
        </>

    )
}

export default Page