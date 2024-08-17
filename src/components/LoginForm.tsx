import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent } from "react"


interface FormData {
    email: string;
    password: string;
};


const LoginForm: React.FC = () => {
    const router = useRouter();
    const [form, setForm] = useState<FormData>({
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setForm({
            ...form, 
            [name]: value
        })
    }
    
    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        console.log("Submitting form: ", form)
        router.push('/foo');
    };

    return (
        <form className="bg-blue-200 w-1/2 ml-auto mr-auto mt-5 text-center" onSubmit={handleSubmit}>
            <strong>
                Login Here 
            </strong>
            <div>
                <label 
                    htmlFor="email"
                >
                    Email: 
                </label>
                <input
                    onChange={handleChange}
                    name="email"
                    type="text"
                    placeholder="email"
                    value={form.email}
                    id="email"
                >
                </input>
            </div>
            <div>
                <label 
                    htmlFor="pwd"
                >
                    Password: 
                </label>
                <input
                    onChange={handleChange}
                    name="password" 
                    type="text"
                    placeholder="Password"
                    value={form.password}
                    id="pwd"
                >
                </input>
            </div>
            <button>
                Submit
            </button>
        </form>
    )
}
export default LoginForm;