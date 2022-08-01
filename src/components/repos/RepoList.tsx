import { RepoItem } from "./RepoItem";

export const RepoList = ({repos}:any) => {
if (repos.length == 0) {
    return (
        <div className="">
            <h2>No repositories</h2>
        </div>
    )
}

return (
    <div className="repos--container">
        <div className="repos--container__body">
            <h2 className="repos--container__body__heading">Latest Repositories</h2>
            {repos.map((repo:any) => (
                <RepoItem key={repo.id} repo={repo}/>
            ))}
        </div>
    </div>
)
}