import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RiLoader2Line } from 'react-icons/ri';
import { Search } from '../actions/All';
import Hero from '../components/hero/Hero';
import MovieCard from '../components/card/MovieCard';
import MovieCardPlaceholder from '../components/card/MovieCardPlaceholder';

export default function SearchPage() {
    const [result, setResult] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [page, setPage] = React.useState(2);
    const [isLoading, setIsLoading] = React.useState(false);

    const params = useParams();
    const navigate = useNavigate();
    const { query } = params;

    const handleSearch = async (e) => {
        const { charCode } = e;

        if (charCode === 13) {
            navigate(`/search/${searchQuery}`, { replace: true });

            const res = await Search(searchQuery);
            setResult(res);
        }
    };

    const handleLoadMore = async () => {
        setPage(page + 1);
        setIsLoading(true);

        await Search(query, page).then((res) => {
            setResult([...result, ...res]);
            setIsLoading(false);
        });
    };

    React.useEffect(async () => {
        window.scrollTo(0, 0);

        const response = await Search(query);
        setResult(response);
    }, []);

    return (
        <>
            <Hero
                searchQuery={query}
                onSearch={handleSearch}
                onSearchValue={(e) => setSearchQuery(e.target.value)}
            >
                <p>MaileHereko</p>
                <h1>Search</h1>
            </Hero>
            <div className="container" id="mainContent">
                <p>
                    Result:
                    {' '}
                    {result.length}
                    {' '}
                    Items
                </p>

                {result.length > 0 ? (
                    <>
                        <div id="listRow">
                            {result.map((item) => (
                                <MovieCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.original_title || item.original_name}
                                    poster={item.poster_path}
                                    rating={item.vote_average}
                                    type={item.media_type}
                                />
                            ))}
                        </div>
                        <center>
                            <br />
                            {isLoading ? (
                                <button
                                    type="button"
                                    onClick={async () => handleLoadMore()}
                                    className="btn btn-regular"
                                    disabled
                                >
                                    <RiLoader2Line className="icon" />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={async () => handleLoadMore()}
                                    className="btn btn-regular"
                                >
                                    Load more
                                </button>
                            )}
                            <br />
                            <br />
                        </center>
                    </>
                ) : (
                    <div id="listRow">
                        <MovieCardPlaceholder />
                        <MovieCardPlaceholder />
                        <MovieCardPlaceholder />
                        <MovieCardPlaceholder />
                    </div>
                )}
            </div>
        </>
    );
}
