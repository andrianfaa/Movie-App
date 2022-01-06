/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../components/hero/Hero';
import { getMovies } from '../actions/Movie';
import { Search } from '../actions/All';
import MovieCardSuggestion from '../components/card/MovieCardSuggestion';

export default function SuggestPage() {
    const [suggestions, setSuggestions] = React.useState([]);
    const [isActive, setIsActive] = React.useState(false);
    const [suggest, setSuggest] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        const { charCode } = e;

        if (charCode === 13) {
            setIsLoading(true);

            if (suggest !== '') {
                const result = await Search(suggest);
                setSuggestions(result);
            }
        }

        setIsLoading(false);
    };

    const handleSubmitButton = async (e) => {
        setIsLoading(true);

        if (suggest !== '') {
            const result = await Search(suggest);
            setSuggestions(result);
        }

        setIsLoading(false);
    };

    const handleChange = (e) => {
        const { value } = e.target;

        if (value === '') {
            setIsActive(false);
        } else {
            setIsActive(true);
        }

        setSuggest(value);
    };

    React.useEffect(async () => {
        window.scrollTo(0, 0);

        if (suggestions.length === 0) {
            const data = await getMovies();
            setSuggestions(data);
        }
    }, []);

    return (
        <>
            <Hero
                activeState={isActive}
                include
                onSearchValue={handleChange}
                onSearch={handleSubmit}
                searchButtonEvent={handleSubmitButton}
                searchButtonState={isLoading}
                inputValue={suggest}
                setInputValue={setSuggest}
            >
                <h1>Suggest me</h1>
                <p>I will really appericiate it if you take time to suggest me something good to watch.</p>
            </Hero>
            <div className="container">
                <div id="listRow">
                    {suggestions.length > 0 ? suggestions.map((item) => (
                        <MovieCardSuggestion
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            poster={item.poster_path}
                            vote={item.vote_average}
                            overview={item.overview}
                            rating={item.vote_average}
                            type="movie"
                        />
                    )) : (
                        <p>No results found</p>
                    )}
                </div>
            </div>
        </>
    );
}
