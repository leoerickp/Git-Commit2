import { useGetCommit } from '../hooks/useGetCommit';
import { Global } from '../Global';
import { CardCommit } from './CardCommit';
import { SpinComponent } from './SpinComponent';


export const CardCommitList = () => {
    const { commits, isLoading, hasError } = useGetCommit(Global.url + 'git-commits/last');
    return (
        <div className="flex flex-row justify-center items-center flex-wrap px-1 md:px-10 mt-4 gap-y-7  lg:justify-between">
            {
                isLoading
                    ? (
                        <SpinComponent />
                    )
                    : (commits) && commits.map((commit: any, key: number) => {
                        return (<CardCommit key={key} commit={commit} />);
                    })
            }
        </div>

    )
}
