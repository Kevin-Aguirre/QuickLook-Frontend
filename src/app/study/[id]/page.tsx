"use client"
import React, {useState, useEffect} from "react"
import { useParams } from "next/navigation"

import { PhraseSet, PhraseDTO } from "@/lib/interfaces"
import Navbar from "@/components/Navbar"
import StudyBody from "./StudyBody"
import EmptySetComponent from "./EmptySetComponent"
import Loading from "@/components/Loading"


const Page : React.FC = () => {
    const [set, setSet] = useState<PhraseSet>()
    let {id} = useParams();
    id = String(id);
    
    const fetchSet = async () => {
        const response = await fetch(`http://localhost:8080/api/v1/set/${id}`);        
        console.log(response);
        
        const data: PhraseSet = await response.json();
        setSet(data);
        
    };
  
    useEffect(() => {
        fetchSet()
    }, []);
  
    return (
        <>
            <Navbar/>
            {set ? (
                set.phrases.length
                ?
                <StudyBody
                    phraseSetId={set.phraseSetId}
                    phraseSetName={set.phraseSetName}
                    phrases={set.phrases}
                    dateAdded={set.dateAdded}
                    fetchSet={fetchSet}
                />
                :
                <EmptySetComponent
                    id={id}
                    fetchSet={fetchSet}
                />

            ) : <Loading/> 
            }
        </>

    )
}

export default Page