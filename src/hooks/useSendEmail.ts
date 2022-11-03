import { useState, useEffect } from 'react';
import axios from 'axios';

export const useSendEmail = (url: string) => {
    /*const [message, setMessage] = useState({
        email: '',
        msg: '',
        status: '',
        isSending: true
    });*/
    const sendEmail = async () => {
        /*setMessage({
            ...message,
            isSending: true
        });*/
        const res = await axios.get(url);
        const { msg } = await res.data;
        /*setMessage({
            ...message,
            msg,
            isSending: false,
        });*/
    }
    /*useEffect(() => {
        sendEmail();
    }, [url]);
    return { ...message };*/
}
