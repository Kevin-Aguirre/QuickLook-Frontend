import { useRouter } from 'next/navigation'
import React, { useState, ChangeEvent, FormEvent } from "react"

interface FormData {
    email: string,
    password: string,
    confirmPassword: string
}

const SignUpForm: React.FC = () => {
    const router = useRouter();
    const [form, setForm] = useState<FormData>({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) : void => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        console.log("submitting form: ", form)
        router.push('/foo')
    }

    return (
        <form className="bg-blue-200 w-1/2 ml-auto mr-auto mt-5 text-center" onSubmit={handleSubmit}>
            <strong>
                Sign Up Here    
            </strong>
            <div>
                <label
                    htmlFor='email'
                >
                    Email: 
                </label>
                <input
                    placeholder='email'
                    type='text'
                    name='email'
                    id='email'
                    value={form.email}
                    onChange={handleChange}
                >   
                </input>
            </div>
            <div>
                <label
                    htmlFor='password'
                >
                    Password:
                </label>
                <input
                    placeholder='Password'
                    type='text'
                    name='password'
                    id='password'
                    value={form.password}
                    onChange={handleChange}
                >   
                </input>
            </div>
            <div>
                <label
                    htmlFor='confirmPassword'
                >
                    Confirm Password: 
                </label>
                <input
                    placeholder='confirmPassword'
                    type='text'
                    name='confirmPassword'
                    id='confirmPassword'
                    value={form.confirmPassword}
                    onChange={handleChange}
                >   
                </input>
            </div>
            <button>
                Register
            </button>
        </form>
    )
}


export default SignUpForm