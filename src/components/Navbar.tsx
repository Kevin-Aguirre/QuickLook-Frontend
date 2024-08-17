import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex flex-row bg-gray-300">
            <div className="mr-auto">
                foo
            </div>
            <ul className="flex flex-row justify-between"> 
                <li className="p-4">
                    foo1
                </li>
                <li className="p-4">
                    bar1
                </li>
                <li className="p-4">
                    foo2
                </li>
                <li className="p-4">
                    bar2
                </li>
            </ul>
        </nav>
    )   


}