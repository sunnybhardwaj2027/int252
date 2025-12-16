import { useSearchParams } from 'react-router-dom';

export default function Filterusers() {
    const [searchParams] = useSearchParams();

    const search = searchParams.get("search");
    const sort = searchParams.get("sort");

    return (
        <div>
            <h1>Filter Users Page</h1>

            <p>Search: {search}</p>
            <p>Sort: {sort}</p>
        </div>
    )
}