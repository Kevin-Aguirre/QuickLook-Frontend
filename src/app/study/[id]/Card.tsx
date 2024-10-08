"use client"

interface CardImport {
    phrase?: string,
    summary?: string
}

const Card: React.FC<CardImport> = ({phrase, summary}) => {

    return (
        <div className="bg-indigo-950 h-full w-full px-8 py-6 flex flex-col items-center">
            <div className="text-white text-5xl p-4">
                <strong>
                    {phrase}                  
                </strong>
            </div>
            <hr
                className="w-full my-4"
                style={{
                    color: 'white',
                    backgroundColor: 'white',
                    height: 1.2
                }}
            />
            <div className="text-center font-bold text-3xl text-white p-3 flex-shrink-0">
               {summary} 
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis eros convallis, pharetra justo vel, volutpat turpis. Fusce nec lacinia sem. Nulla eu odio turpis. Curabitur lacinia aliquet urna id fermentum. Suspendisse feugiat erat diam, id imperdiet turpis bibendum in. Sed nisl quam, sodales eu massa sit amet, hendrerit placerat lorem. Nam non tortor lobortis, imperdiet justo vel, aliquet sapien. Duis lacinia posuere augue a ornare. Morbi vehicula rutrum lacus interdum maximus. Ut non ex in eros feugiat pulvinar eget eu ante. Nulla tristique felis et hendrerit scelerisque. Etiam non congue leo.
                
                In et tellus consequat, lobortis ligula vitae, faucibus sem. Proin commodo, quam at efficitur ornare, dolor ipsum blandit nulla, nec tempus ex dui eu ipsum. Vestibulum arcu nulla, scelerisque non sapien non, rhoncus efficitur purus. Nunc libero justo, tincidunt quis pellentesque eget, rutrum a nulla. Pellentesque eget imperdiet massa, a feugiat est. Proin nec scelerisque eros. Duis quis lacinia tellus. Duis eget ullamcorper diam, quis commodo lacus. Proin auctor nunc vitae ante accumsan euismod. Nunc erat purus, tincidunt vitae est id, pretium feugiat erat. Sed quis tortor nibh. Donec in viverra erat.  */}
            </div>
        </div>
    )
}

export default Card