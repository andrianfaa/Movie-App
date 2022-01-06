import React from 'react';
import { useParams } from 'react-router-dom';
import { getDetailMovie } from '../../actions/Movie';

export default function DetailMoviePage() {
    const params = useParams();
    const { id } = params;

    React.useEffect(async () => {
        window.scrollTo(0, 0);
        const response = await getDetailMovie(parseInt(id, 10));

        console.log(response);
    }, []);

    return (
        <div className="container" id="mainContent">
            <h1>Detail Movie Page</h1>

            <pre>
                {JSON.stringify(params, null, 2)}
            </pre>
        </div>
    );
}
