import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { DetailComp } from './DetailComp';

export const Detail = (): any => {
    const { state }: any = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!state) navigate('/');
    }, []);
    return (
        <>
            {
                (state) && < DetailComp state={state} />
            }
        </>
    )
}



