import { useEffect, useState } from 'react';
import axios from 'axios';


export const useGetCommit = (url: string) => {
    const [state, setState] = useState({
        commits: [],
        isLoading: true,
        hasError: null
    });
    const getCommit = async () => {
        setState({
            ...state,
            isLoading: true
        });
        const res = await axios.get(url);
        const commits = await res.data;
        setState({
            commits,
            isLoading: false,
            hasError: null
        });
    }
    useEffect(() => {
        getCommit();
    }, [url]);

    return {
        commits: state.commits,
        isLoading: state.isLoading,
        hasError: state.hasError
    };

}
