
interface ChangePhraseButtonProps {
    phraseIndex: number,
    setPhraseIndex: Function, 
    lengthOfSet: number,
    increase: boolean
} 
const ChangePhraseButton : React.FC<ChangePhraseButtonProps> = ({phraseIndex, setPhraseIndex, lengthOfSet, increase}) => {


    const handleClick = () => {
        if (increase) {
            if (phraseIndex !== lengthOfSet - 1) {
                setPhraseIndex((prevIndex : number) => prevIndex + 1)
            }
        } else {
            if (phraseIndex !== 0) {
                setPhraseIndex((prevIndex : number) => prevIndex - 1)
            }
        }
    }

    return (
        
        <button className="h-full px-2 text-3xl text-white" onClick={handleClick}>
            <strong>
                {
                    increase
                    ?
                    ">"
                    :
                    "<"
                }
            </strong>
        </button>
    )
}

export default ChangePhraseButton