
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
        
        <button className="bg-gray-200" onClick={handleClick}>
            {
                increase
                ?
                ">"
                :
                "<"
            }
        </button>
    )
}

export default ChangePhraseButton