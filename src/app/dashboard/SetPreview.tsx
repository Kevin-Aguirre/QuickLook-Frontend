import { PhraseSet } from "@/lib/interfaces"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { useRouter } from "next/navigation"


interface SetPreviewProps {
    set: PhraseSet
    fetchUser: Function
}

const SetPreview : React.FC<SetPreviewProps> = ({set, fetchUser}) => {
    const router : AppRouterInstance = useRouter()
    const formattedDate : string = new Date(set.dateAdded).toLocaleDateString()

    const handleStudyButton = () => {
        router.push(`/study/${set.phraseSetId}`)
    }


    const handleDeleteButton = async () => {
        const response = await fetch(`http://localhost:8080/api/v1/set/${set.phraseSetId}`, {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        if (response.ok) {
            alert('successfully deleted set with id ' + set.phraseSetId)
        } else {
            alert('failed to delete')
        }
        fetchUser();
        router.replace('/dashboard')
        
    }


    return (
        <div className="bg-gray-300 my-3 p-2 rounded flex flex-row justify-between items-center">
            <div className="">
                <div className="text-2xl">
                    {set.phraseSetName}
                </div>
                <div>
                    Date created: {formattedDate}
                </div>
            </div>
            <div className="flex flex-row h-10">
                <button
                    className="flex items-center p-4 mx-2 bg-gray-200" 
                    onClick={handleStudyButton}
                >
                    Study
                </button>
                
                <button
                    className="flex items-center p-4 mx-2 bg-gray-200" 
                    onClick={handleDeleteButton}
                >
                    Delete
                </button>
            </div>

        </div>
    )
}

export default SetPreview