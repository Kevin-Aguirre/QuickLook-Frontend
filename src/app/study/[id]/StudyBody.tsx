"use client"
import React, {use, useState} from "react"
import { Phrase, PhraseDTO } from "@/lib/interfaces"
import Card from "./Card"
import ChangePhraseButton from "./ChangePhraseButton"
import AddPhraseModal from "./AddPhraseModal"
import Loading from "@/components/Loading"

interface StudyBodyProps {
    phraseSetId : Number
    phraseSetName : String, 
    phrases : Phrase[], 
    dateAdded : String,
    fetchSet: Function
}

const StudyBody : React.FC<StudyBodyProps> = ({phraseSetId, phraseSetName, phrases, dateAdded, fetchSet}) => {
    
    const [phraseIndex, setPhraseIndex] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [isAddPhraseModalOpen, setIsAddPhraseModalOpen] = React.useState<boolean>(false);
    const handleOpen = () => {setIsAddPhraseModalOpen(true)}
    const handleClose = () => {setIsAddPhraseModalOpen(false)}
    const handleAddPhrase = async (newPhraseName: string) => {
        setIsLoading(true);
        const req : PhraseDTO = {
            phrase: newPhraseName,
            summary: "",
            dateAdded: new Date(),
            userId: Number(localStorage.getItem('token')),
            setId: phraseSetId
        }

        const res = await fetch("http://localhost:8080/api/v1/phrase", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(req)
        })

        if (res.ok) {
            alert('successfully added phrase')
            fetchSet()
            setPhraseIndex(phrases.length)
        } else {
            alert('failed')
        }
        setIsLoading(false);
        
    }

    return (
        <div className="p-4 h-9/10 bg-gray-400 mx-8 my-2 flex flex-col items-center">
            <div className="text-white p-4 flex flex-row justify-around text-6xl">
                <strong>
                    {phraseSetName}
                </strong>
            </div>
            <hr/> 
            <div className="w-full h-full bg-indigo-900 flex flex-row justify-center items-center">
                <ChangePhraseButton
                    phraseIndex={phraseIndex}
                    setPhraseIndex={setPhraseIndex}
                    lengthOfSet={phrases.length}
                    increase={false}
                />
                <Card
                    phrase={phrases?.[phraseIndex]?.phrase ?? ''}
                    summary={phrases?.[phraseIndex]?.summary ?? ''}
                />
                <ChangePhraseButton
                    phraseIndex={phraseIndex}
                    setPhraseIndex={setPhraseIndex}
                    lengthOfSet={phrases.length}
                    increase={true}
                />
            </div>
            <div className="bg-blue-100 w-full text-center py-1 text-4xl py-4">
                <strong>{phraseIndex + 1} / {phrases.length}</strong>
                
            </div>
            <button 
                className="bg-green-400 w-full rounded text-white font-bold p-2 text-2xl my-2"
                onClick={handleOpen}
            >
                Add Phrase to Set
            </button>
            <AddPhraseModal
                isAddPhraseModalOpen={isAddPhraseModalOpen}
                handleClose={handleClose}
                handleAddPhrase={handleAddPhrase}
            />
            {
                isLoading
                &&
                <Loading/>
            }
            
        </div>
    ) 

}


export default StudyBody