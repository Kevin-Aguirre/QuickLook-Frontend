import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter()

    const handleLogout = () => {
        localStorage.clear()
        router.replace('/login')
    }

    return (
        <nav className="flex flex-row justify-between items-center px-6 py-1 text-black bg-gray-900">
            <Link href={"/dashboard"}>
                <div className="text-white font-bold text-4xl">
                    QuickLook
                </div>
            </Link>
            <ul className="p-2 flex flex-row justify-between items-center"> 
                <Link
                    href={"/dashboard"}
                >
                    <div
                        className="bg-indigo-950 text-white font-bold text-2xl rounded p-2"
                    >
                        Dashboard
                    </div>
                </Link>
                <button
                    className="bg-indigo-950 text-white font-bold text-2xl ml-10 rounded p-2"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </ul>
        </nav>
    )   


}