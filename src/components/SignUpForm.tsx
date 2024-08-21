import { useRouter } from 'next/navigation'
import React, { useState, ChangeEvent, FormEvent } from "react"

interface FormData {
    email: string,
    password: string,
    confirmPassword: string
}

interface RequestData {
    email?: string,
    passwordHash?: string,
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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // check if email is in use

        if (!form.email) {
            alert("You must include a valid email")
            return;
        }

        if (!form.password) {
            alert('You must have a password.')
            return;
        }

        if (form.password !== form.confirmPassword) {
            alert('passwords do not match')
            return;
        }


        let returnObject : RequestData = {};
        returnObject.email = form.email
        returnObject.passwordHash = form.password


        const res = await fetch("http://localhost:8080/api/v1/user", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(returnObject)

        })

        if (res.ok) {
            alert("Successfully created account.")
            router.replace("/dashboard")
        } else {
            let text = await res.text()
            let foo = JSON.parse(text)
            alert(foo.message)
        }
    }

    return (
        <form className="bg-indigo-900 w-1/2 py-20 px-20 ml-auto mr-auto mt-5 text-center text-white" onSubmit={handleSubmit}>
            <div className='text-5xl pb-20 mb-20'>
                <strong>
                    Sign Up 
                </strong>
            </div>
            <div
                className='pl-8 pr-4 py-4 rounded bg-gray-900 my-2 flex justify-between font-bold text-xl items-center'
            >
                <label
                    htmlFor='email'
                    className='text-3xl'
                >
                    Email: 
                </label>
                <input
                    placeholder='Email'
                    type='text'
                    name='email'
                    id='email'
                    value={form.email}
                    onChange={handleChange}
                    className='px-3 py-4 w-1/2 !text-black'
                >   
                </input>
            </div>
            <div
                className='pl-8 pr-4 py-4 items-center p-2 rounded bg-gray-900 my-2 flex justify-between font-bold text-xl'
            >
                <label
                    htmlFor='password'
                    className='text-3xl'
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
                    className='px-3 py-4 w-1/2 !text-black'
                >   
                </input>
            </div>
            <div
                className='pl-8 pr-4 py-4 items-center p-2  rounded bg-gray-900 my-2 flex justify-between font-bold text-xl'
            >
                <label
                    htmlFor='confirmPassword'
                    className='text-3xl'
                >
                    Confirm Password: 
                </label>
                <input
                    placeholder='Confirm Password'
                    type='text'
                    name='confirmPassword'
                    id='confirmPassword'
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className='px-3 py-4 w-1/2 !text-black'
                >   
                </input>
            </div>
            <button
                className='bg-green-500 w-full text-white rounded font-bold text-3xl py-5 my-5'
            >
                Register
            </button>
            <hr className='my-10 bg-danger border-2 border-top border-danger' />
            <div
                className=''
            >
                <label
                    className='text-2xl font-bold w-full'
                >
                    Already have an Account?
                </label>

                <button
                    className='bg-green-500 w-full text-white rounded font-bold text-3xl py-5 my-2'
                >
                    Go to Login
                </button>
            </div>


        </form>
    )
}


export default SignUpForm