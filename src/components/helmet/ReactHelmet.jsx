/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default function ReactHelmet({
    title = 'MaileHereko - Movie & TV Shows Web App',
    description = 'MaileHereko - Movie & TV Shows Web App',
    keywords = 'MaileHereko, Movie App',
    url = 'https://mailehereko.project.andriann.co',
    image = 'https://mailehereko.project.andriann.co/banner.jpg',
}) {
    return (
        <Helmet>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Andriann" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="MaileHereko" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:site" content="@mailehereko" />

            <title>{title}</title>

            <link rel="canonical" href={url} />
        </Helmet>
    );
}

ReactHelmet.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
};
