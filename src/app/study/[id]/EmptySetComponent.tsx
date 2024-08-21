import React from "react"
import AddPhraseModal from "./AddPhraseModal"
import { PhraseDTO } from "@/lib/interfaces";


interface EmptySetComponentProperties {
    id: String
    fetchSet: Function
}

const EmptySetComponent: React.FC<EmptySetComponentProperties> = ({id, fetchSet}) => {
    const [isAddPhraseModalOpen, setIsAddPhraseModalOpen] = React.useState<boolean>(false);
    
    const handleOpen = () => {setIsAddPhraseModalOpen(true)}
    const handleClose = () => {setIsAddPhraseModalOpen(false)}
    const handleAddPhrase = async (newPhraseName: string) => {
        const req : PhraseDTO = {
            phrase: newPhraseName,
            summary: "",
            dateAdded: new Date(),
            userId: Number(localStorage.getItem('token')),
            setId: Number(id)
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
            
        } else {
            alert('failed')
        }
        
    }

    return (
        <>
            <div className="bg-white w-9/10 rounded mx-10 my-10 text-center py-8 px-10">
                <div className="font-bold text-4xl p-6 mb-10">
                    This set is empty
                </div>
                <div className="bg-gray-200">
                    <button 
                        className="bg-green-400 w-full rounded text-white font-bold text-2xl py-4"
                        onClick={handleOpen}
                    >
                        Add Phrase to Set
                    </button>
                </div>
            </div>
            <AddPhraseModal
                isAddPhraseModalOpen={isAddPhraseModalOpen}
                handleClose={handleClose}
                handleAddPhrase={handleAddPhrase}
            />
        </>
    )
}

export default EmptySetComponent