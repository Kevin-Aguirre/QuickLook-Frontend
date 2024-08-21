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
    
    const handleSubmit = async (e: FormEvent) => {
        
        e.preventDefault();
        const res = await fetch('http://localhost:8080/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: form.email, passwordHash: form.password }),
        });

        if (res.ok) {
            const data = await res.json();
            
            alert("Successfully logged in.")

            localStorage.setItem('token', data);
            router.replace('/dashboard')
        } else {
            alert('Login failed');
        }
    };


    

    return (
        <div className="bg-indigo-900 w-1/2 py-20 px-20 ml-auto mr-auto mt-5 text-center text-white">
            <form  onSubmit={handleSubmit}>
                <div className='text-5xl pb-20 mb-20'>
                    <strong>
                        Login 
                    </strong>
                </div>
                <div
                    className='pl-8 pr-4 py-4 rounded bg-gray-900 my-2 flex justify-between font-bold text-xl items-center'
                >
                    <label 
                        htmlFor="email"
                        className='text-3xl'
                    >
                        Email: 
                    </label>
                    <input
                        onChange={handleChange}
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={form.email}
                        id="email"
                        className='px-3 py-4 w-1/2 !text-black'
                    >
                    </input>
                </div>
                <div
                    className='pl-8 pr-4 py-4 items-center p-2 rounded bg-gray-900 my-2 flex justify-between font-bold text-xl'
                >
                    <label 
                        htmlFor="pwd"
                        className='text-3xl'
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
                        className='px-3 py-4 w-1/2 !text-black'
                    >
                    </input>
                </div>
                <button
                    className='bg-green-500 w-full text-white rounded font-bold text-3xl py-5 my-5'
                >
                    Submit
                </button>
            </form>
            <hr className='my-10 bg-danger border-2 border-top border-danger' />
            <div
                className=''
            >
                <label
                    className='text-2xl font-bold w-full'
                >
                    Dont have an account yet?
                </label>

                <button
                    className='bg-green-500 w-full text-white rounded font-bold text-3xl py-5 my-2'
                    onClick={() => router.replace('/register')}
                >
                    Register
                </button>
            </div>

        </div>
        
    )
}
export default LoginForm;