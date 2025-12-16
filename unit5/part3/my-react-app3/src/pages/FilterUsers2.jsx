import { useSearchParams } from "react-router-dom";

export default function FilterUsers2() {
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") || "";
    const sort = searchParams.get("sort") || "none";

    function updateSearch(e) {
        setSearchParams( {search: e.target.value, sort} );
    }

    function updateSort(e) {
        setSearchParams( {search, sort: e.target.value} );
    }

    return (
        <div>
            <h1>Filter Users</h1>

            <input
            placeholder="search..."
            value={search}
            onChange={updateSearch}
            />

            <select value={sort} onChange={updateSort}>
                <option value="none">None</option>
                <option value="name">Name</option>
                <option value="city">City</option>
            </select>

            <p><strong>Search:</strong> {search}</p>
            <p><strong>Sort:</strong> {sort}</p>
        </div>
    )
}