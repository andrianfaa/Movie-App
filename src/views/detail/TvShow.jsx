import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetailTvPage() {
    const params = useParams();
    const { id } = params;

    React.useEffect(async () => {
        window.scrollTo(0, 0);
        console.log(id);
    }, []);

    return (
        <div className="container" id="mainContent">
            <h1>Detail TV Page</h1>

            <pre>
                {JSON.stringify(params, null, 2)}
            </pre>
        </div>
    );
}
