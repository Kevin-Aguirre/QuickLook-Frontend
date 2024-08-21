
import { useState } from "react"

interface AddPhraseModalProperties{
    isAddPhraseModalOpen: boolean
    handleClose: Function    
    handleAddPhrase: Function
}

const AddPhraseModal : React.FC<AddPhraseModalProperties> = ({isAddPhraseModalOpen, handleClose, handleAddPhrase}) => {
    const [newPhraseName, setNewPhraseName] = useState("")

    function updatePhraseName(e: React.ChangeEvent<HTMLInputElement>) {
        setNewPhraseName(e.target.value)
    }

    function handleClick() {
        handleAddPhrase(newPhraseName)
        handleClose()
    }

    console.log(newPhraseName);
    
    if (!isAddPhraseModalOpen) {
        return null
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
            <div
            className="bg-white p-6 rounded-lg shadow-lg w-80"
            >
                <div
                    className="text-2xl text-center m-2"
                >
                    <strong>New Phrase</strong>
                </div>
                <input
                    className="bg-gray-200 rounded p-1 my-1 w-full text-black"
                    type="text"
                    value={newPhraseName}
                    onChange={updatePhraseName}
                    placeholder="Enter Phrase Here"
                >
                </input>
                <button
                    onClick={handleClick}
                    className="bg-green-200 w-full rounded p-1 mt-2"
                >
                    Add Phrase
                </button>
                <button
                    onClick={() => handleClose()}
                    className="bg-red-200 w-full rounded p-1 my-2"
                >
                    Cancel
                </button>
                
            </div>
        </div>
    )
}

export default AddPhraseModal