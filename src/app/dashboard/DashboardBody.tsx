import SetPreview from "./SetPreview";
import { User, PhraseSet, newPhraseSet} from "@/lib/interfaces";

interface DashboardBodyProps {
    sets?: PhraseSet[] 
    user: User
    fetchUser: Function
}

const DashboardBody : React.FC<DashboardBodyProps> = ({sets, user, fetchUser}) => {    
    const setElements = sets?.map((set) => (
        <SetPreview
            set={set}
            fetchUser={fetchUser}
        />
    ));

    const handleAddSet = async () => {
        console.log(user);

        const pleaseAddMe = {
            phraseSetName: "asd",
            userId: 1
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
        } else {
            alert('failed')
        }
        
    }

    console.log(setElements);
    

    return (
        <div className="m-8">
            <div className="flex flex-row justify-between">
                <div className="text-4xl m-2">
                    Sets
                </div>
                <button 
                    className="bg-red-200 px-6 m-2 rounded"
                    onClick={handleAddSet}
                >
                    Create New Set
                </button>
            </div>
            <hr></hr>
            {setElements?.length > 0 ? setElements : <p>No sets found bro.</p>}
        </div>
    )
}

export default DashboardBody