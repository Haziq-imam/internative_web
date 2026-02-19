import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../../components/RealTimeAlerts/Hero';
import AlertFeatures from '../../../components/RealTimeAlerts/AlertFeatures';
import FAQ from '../../../components/RealTimeAlerts/FAQ';

const RealTimeAlerts = () => {
    return (
        <div className="min-h-screen bg-background text-white">
            <Helmet>
                <title>Real-Time Trading Alerts: Instant Push Notifications | InterNative Traders</title>
                <meta name="description" content="Get instant trading signals via push notifications, SMS, and mobile app. Real-time alerts delivered in under 30 seconds for the best entry prices." />
            </Helmet>
            <Hero />
            <AlertFeatures />
            <FAQ />
        </div>
    );
};

export default RealTimeAlerts;
