import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title ? `${title} | InterNative Markets` : 'InterNative Markets | Professional Trading Signals'}</title>
            <meta name="description" content={description || "Professional trading signals for Options, Stocks, and Crypto. Join 10,000+ traders maximizing their returns with InterNative."} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || 'InterNative Markets'} />
            <meta property="og:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
};

export default Seo;
