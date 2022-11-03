import moment from 'moment';

export const DetailComp = ({ state }: any) => {

    const { commit } = state;
    const { commiter_avatar_url, committer, commiter_html_url, message, author, author_html_url, author_avatar_url } = commit;
    const { name, date, email } = committer;

    return (
        <div
            className="fadeInDown flex flex-col columns-3 bg-cyan-200 shadow-md rounded-md border border-cyan-300 border-solid">
            <div className="flex flex-row gap-2 card-header bg-cyan-400 rounded-t-md p-2 border-b border-cyan-900 border-solid ">
                <img src={commiter_avatar_url} className="h-full drop-shadow-xl rounded-lg" alt="avatar" />
                <div className="flex flex-col justify-between">
                    <p><strong>Committer:</strong> <span>{name}</span></p>
                    <p><strong>Date:</strong> <span>{moment(date).utc().format('YYYY-MM-DD')}</span></p>
                    <p><strong>Email:</strong> <span>{email}</span></p>
                </div>
            </div>
            <div className="flex flex-col px-16">
                <strong>Message:</strong><span>{message}</span>
                <p className="text-right"><a href={commiter_html_url} target="_blank" className="rows-2"><strong>Url:</strong> {name}</a></p>

                <p><strong>Author:</strong> <span>{commit.author.name}</span></p>
                <div className="flex justify-center items-center"><img src={author_avatar_url} className="flex w-fit drop-shadow-xl rounded-lg" alt="avatar" /></div>
                <p className="text-right"><strong>Url:</strong> <a href={author_html_url} target="_blank" >{author.name}</a></p>
            </div>

        </div >

    )
}