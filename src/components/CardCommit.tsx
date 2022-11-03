import moment from "moment";
import { useNavigate } from 'react-router-dom';

export const CardCommit = ({ commit }: any) => {
    const { commiter_avatar_url, committer, commiter_html_url, message, author, author_html_url } = commit;
    const { name, date, email } = committer;
    const navigate = useNavigate();
    const goDetail = () => {
        navigate('/detail', { state: { commit } });
    }
    return (
        <div
            className="card flex flex-col columns-3 bg-cyan-200 shadow-md rounded-md border border-cyan-300 border-solid">
            <div className="flex flex-row gap-2 card-header bg-cyan-400 rounded-t-md p-2 border-b border-cyan-900 border-solid">
                <img src={commiter_avatar_url} className="avatar" alt="avatar" />
                <div>
                    <p><strong>Committer:</strong> <span>{name}</span></p>
                    <p><strong>Date:</strong> <span>{moment(date).utc().format('YYYY-MM-DD')}</span></p>
                </div>
            </div>
            <div className="flex flex-col h-full p-2">
                <strong>Message:</strong>
                <p className="rows-1">{message}</p>
                <p className="text-right"><a href={commiter_html_url} target="_blank" className="rows-1">Url de {name}</a></p>

                <p><strong>Author:</strong> <span>{author.name}</span></p>
                <p><strong>Url:</strong> <a href={author_html_url} target="_blank" >{author.name}</a></p>
            </div>
            <div className="bottom-10 p-1 text-center">
                <button className="bg-cyan-500 hover:bg-cyan-600 rounded-lg px-8 py-2 text-cyan-50" onClick={goDetail}>Details</button>
            </div>
        </div >
    )
}
