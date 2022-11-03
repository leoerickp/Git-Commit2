import { useGetCommit } from '../hooks/useGetCommit';
import { Global } from '../Global';
import { CardCommitH } from './CardCommitH';
import { SpinComponent } from './SpinComponent';


export const Commits = () => {
    const { commits, isLoading, hasError } = useGetCommit(Global.url + 'git-commits/all');
    return (
        <div className="flex flex-row justify-center items-center flex-wrap px-5 md:px-10 mt-4 gap-y-7  lg:justify-between">
            {
                isLoading
                    ? (
                        <SpinComponent />
                    )
                    : (commits) && commits.map((commit: any, key: number) => {
                        return (<CardCommitH key={key} commit={commit} />);
                    })
            }
        </div>
    )
}
