/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';
import { getDetailMovie } from '../actions/Movie';
import { getDetailTvShow } from '../actions/TvShow';
import CONFIG from '../globals/config';
import ReactHelmet from '../components/helmet/ReactHelmet';
import { IconStar } from '../components/icons';

export default function DetailPage() {
    const [data, setData] = React.useState(null);
    const params = useParams();
    const { id, type } = params;

    React.useEffect(async () => {
        window.scrollTo(0, 0);

        switch (type) {
        case 'movie':
            const movieData = await getDetailMovie(id);
            setData(movieData);
            break;

        default:
            const tvShowData = await getDetailTvShow(id);
            setData(tvShowData);
            break;
        }
    }, []);

    return (
        <>
            <ReactHelmet
                title={`${data?.title ?? data?.original_name} | MaileHereko`}
                description={`${data?.overview}`}
                keywords={`${data?.genres?.map((genre) => genre.name).join(', ')}`}
                url={`https://mailehereko.project.andriann.co/${type}/${id}`}
            />

            <div className="container" id="mainContent">
                <div className="detail-header">
                    <div className="detail-image">
                        <img src={`${CONFIG.tmdbApi.img.hd}${data?.backdrop_path}`} alt={data?.title ?? data?.original_name} />
                    </div>
                    <div className="detail-content">
                        <p className="detail-path">MaileHereko &nbsp; / &nbsp; Movies</p>
                        <h3 className="text-white text-bold">{data?.title ?? data?.original_name}</h3>
                    </div>
                </div>

                <div className="detail-row">
                    <div className="detail-col-image">
                        <img src={`${CONFIG.tmdbApi.img.hd}${data?.poster_path}`} alt={data?.title} />
                    </div>
                    <div className="detail-col-content">
                        <h4>
                            {data?.tagline}
                        </h4>
                        <p>
                            {data?.overview}
                        </p>
                        <div className="detail-col-rating">
                            <div className="detail-col-rating-star">
                                <IconStar />
                                <span>{data?.vote_average}</span>
                            </div>
                        </div>
                        <div className="detail-col-content-info">
                            <div className="detail-col-content-info-item">
                                <p className="text-bold text-light">
                                    Type
                                </p>
                                <p>
                                    {type === 'movie' ? 'Movie' : 'Tv Show'}
                                </p>
                            </div>
                            <div className="detail-col-content-info-item">
                                <p className="text-bold text-light">
                                    Status
                                </p>
                                <p>
                                    {data?.status}
                                </p>
                            </div>
                            <div className="detail-col-content-info-item">
                                <p className="text-bold text-light">
                                    Release Date
                                </p>
                                <p>
                                    {data?.release_date ?? data?.first_air_date}
                                </p>
                            </div>
                            <div className="detail-col-content-info-item">
                                <p className="text-bold text-light">
                                    Last Air Date
                                </p>
                                <p>
                                    {data?.last_air_date ?? 'Unknown'}
                                </p>
                            </div>
                            <div className="detail-col-content-info-item">
                                <p className="text-bold text-light">
                                    No. of Seasons
                                </p>
                                <p>
                                    {data?.number_of_seasons ?? 0}
                                </p>
                            </div>
                            <div className="detail-col-content-info-item">
                                <p className="text-bold text-light">
                                    No. of Episodes
                                </p>
                                <p>
                                    {data?.number_of_episodes ?? 0}
                                </p>
                            </div>
                        </div>
                        <div className="detail-col-content-item">
                            <p className="text-bold text-light">
                                Episode Runtime
                            </p>
                            <p>
                                {data?.episode_run_time ?? 0}
                            </p>
                        </div>
                        <div className="detail-col-content-item">
                            <p className="text-bold text-light">
                                Genres
                            </p>
                            <p>
                                {data?.genres?.map((genre) => genre.name).join(', ')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
