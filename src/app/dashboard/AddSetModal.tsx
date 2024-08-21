
import { useState } from "react"

interface AddSetModalProperties{
    isAddSetModalOpen: boolean
    handleClose: Function    
    handleAddSet: Function
}

const AddSetModal : React.FC<AddSetModalProperties> = ({isAddSetModalOpen, handleClose, handleAddSet}) => {
    const [newSetName, setNewSetName] = useState("")

    function updateSetName(e: React.ChangeEvent<HTMLInputElement>) {
        setNewSetName(e.target.value)
    }

    function handleClick() {
        handleAddSet(newSetName)
        handleClose()
    }

    console.log(newSetName);
    
    if (!isAddSetModalOpen) {
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
                    <strong>New Set</strong>
                </div>
                <input
                    className="bg-gray-200 rounded p-1 my-1 w-full text-black"
                    type="text"
                    value={newSetName}
                    onChange={updateSetName}
                    placeholder="Enter Set Name Here"
                >
                </input>
                <button
                    onClick={handleClick}
                    className="bg-green-200 w-full rounded p-1 mt-2"
                >
                    Add Set
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

export default AddSetModal