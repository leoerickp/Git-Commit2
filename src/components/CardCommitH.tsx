import moment from "moment";

export const CardCommitH = ({ commit }: any) => {
    const { commiter_avatar_url, committer, commiter_html_url, message, author, author_html_url } = commit;
    const { name, date, email } = committer;
    return (
        <div
            className="flex flex-col gap-1 bg-cyan-200 shadow-none hover:shadow-lg rounded-md border border-cyan-300 border-solid w-full ">
            <div className="flex flex-row gap-1 bg-cyan-400 rounded-t-md p-2 border-b border-cyan-900 border-solid w-full">
                <img src={commiter_avatar_url} className="avatar" alt="avatar" />
                <div>
                    <strong>Committer:</strong> <span>{name} | </span>
                    <strong>Date:</strong><span>{moment(date).utc().format('YYYY-MM-DD')} | </span>
                    <strong>Email:</strong> <span>{email} </span>
                    <strong>| Url:</strong><a href={commiter_html_url} target="_blank" className="rows-1">{name}</a>
                    <p><strong>Message:</strong> {message}</p>
                </div>
            </div>
            <div className="p-2">
                <p>
                    <strong>Author:</strong> <span>{author.name} | </span>
                    <strong>Url:</strong> <a href={author_html_url} target="_blank" >{author.name}</a>
                </p>
            </div>

        </div >
    )
}
