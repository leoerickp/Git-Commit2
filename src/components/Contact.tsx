import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import { useRef, useState } from 'react';
import SimpleReactValidator from "simple-react-validator";


import { Global } from '../Global';
import { useForm } from '../hooks/useForm';
import axios from 'axios';


const sendMessage = async (event: any, navigate: any, message: any) => {
    event.preventDefault();
    const res = await axios.post(Global.url + 'sendmail', message);
    const { msg } = await res.data;
    if (msg == 'success') {
        swal.fire({
            title: 'Your message was sent successfully!',
            icon: 'success',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        navigate('/');
    }
}

export const Contact = () => {
    const navigate = useNavigate();
    const simpleValidator = useRef(new SimpleReactValidator());
    const [buttonActivated, setButtonActivated] = useState(false);
    const { formState, onInputChange, onResetForm, email, content }: any = useForm({
        email: '',
        content: ''
    });
    const onInputChangeLocal = async (event: any) => {
        await onInputChange(event);
        setButtonActivated(simpleValidator.current.allValid());
    }


    return (
        <div className="fadeInDown flex relative justify-center items-center bg-cyan-200 shadow-lg border-2 p-2 border-cyan-300 rounded-md">
            <form className="w-full md:w-3/6" onSubmit={(event) => sendMessage(event, navigate, { email, msg: content })}>
                <div className="flex flex-col gap-1 ">
                    <label htmlFor="email" className="block text-md font-medium text-cyan-900">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="bg-cyan-100 border-2 border-cyan-200 rounded-md shadow"
                        defaultValue={email}
                        placeholder="Ex. name@dominio.com"
                        onChange={onInputChangeLocal}
                        onBlur={() => simpleValidator.current.showMessageFor('email')}
                        autoFocus
                        required
                    />
                    {simpleValidator.current.message('email', email, 'email|required')}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="content" className="block text-sm font-medium text-cyan-900">Message</label>
                    <textarea
                        name="content"
                        className="bg-cyan-100 border-2 border-cyan-200 rounded-md shadow"
                        defaultValue={content}
                        placeholder="Write a message"
                        onChange={onInputChangeLocal}
                        onBlur={() => simpleValidator.current.showMessageFor('content')}
                        required
                    >
                    </textarea>
                    {simpleValidator.current.message('content', content, 'required')}
                </div>
                <input
                    type="submit"
                    value="Send"
                    className={buttonActivated ? "bg-cyan-500 hover:bg-cyan-600 rounded-lg px-8 py-2 text-cyan-50 m-1" : "bg-slate-400 rounded-lg px-8 py-2 text-cyan-50 m-1"}
                    disabled={buttonActivated}
                />

            </form >
        </div >
    )
}
