"use client"
import React, {use, useState} from "react"
import { PhraseSet } from "@/lib/interfaces"
import Card from "./Card"
import ChangePhraseButton from "./ChangePhraseButton"


const StudyBody : React.FC<PhraseSet> = ({phraseSetId, phraseSetName, phrases, dateAdded}) => {
    const [phraseIndex, setPhraseIndex] = useState<number>(0)

    // store current phrase and current index 
    // index + phrases + inc/dec flag can be passed to buttons (index to determine which is next/prev, inc/dec flag to determine direction, phrases to determine length so it is known if start of list or end)
    // current index and phrase passed to card


    


    return (
        <div className="p-4 h-4/5 bg-blue-400 mx-8 my-2 flex flex-col items-center">
            <div className="bg-yellow-200 p-1 flex fle?? ''x-row justify-around text-2xl">
                {phraseSetName}
            </div>
            <hr/> 
            <div className="w-full h-full bg-blue-100 flex flex-row items-center">
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
            
        </div>
    ) 

}


export default StudyBody