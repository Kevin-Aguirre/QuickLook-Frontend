"use client"
import React from "react";
import SetPreview from "./SetPreview";
import { User, PhraseSet, newPhraseSet} from "@/lib/interfaces";
import AddSetModal from "./AddSetModal"


interface DashboardBodyProps {
    sets?: PhraseSet[] 
    user: User
    fetchUser: Function
}

const DashboardBody : React.FC<DashboardBodyProps> = ({sets, user, fetchUser}) => {    
    const [isAddSetModalOpen, setIsAddSetModalOpen] = React.useState<boolean>(false);

    const handleOpen = () => {
        setIsAddSetModalOpen(true)
    }

    const handleClose = () => {
        setIsAddSetModalOpen(false)
    }

    const setElements = sets?.map((set) => (
        <SetPreview
            set={set}
            fetchUser={fetchUser}
        />
    ));

    const handleAddSet = async (newSetName: string) => {
        const pleaseAddMe = {
            phraseSetName: newSetName,
            userId: localStorage.getItem('token')
        }

        const res = await fetch("http://localhost:8080/api/v1/set", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(pleaseAddMe)
        })

        if (res.ok) {
            alert('successfully added set')
            fetchUser()
        } else {
            alert('failed')
        }
        
    }

    console.log(setElements);


    

    return (
        <div className="m-8">
            <div className="flex flex-row justify-between items-center">
                <div className="text-white font-bold    text-6xl m-2">
                    Sets
                </div>
                <button 
                    className="bg-blue-300 px-6 py-6 my-2 rounded text-3xl font-bold "
                    onClick={handleOpen}
                >
                    Create New Set
                </button>
            </div>
            <hr></hr>
            {
                setElements?.length > 0 
                ? 
                setElements 
                : 
                <div className="w-full bg-red-500 text-white font-bold text-5xl text-center rounded py-6 my-4">
                    No sets found.
                </div>
            
            }
            <AddSetModal
                isAddSetModalOpen={isAddSetModalOpen}
                handleClose={handleClose}
                handleAddSet={handleAddSet}
            />
        </div>
    )
}

export default DashboardBody