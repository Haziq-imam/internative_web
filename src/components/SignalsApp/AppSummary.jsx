import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import GlassCard from '../ui/GlassCard';

const AppSummary = () => {
    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-white">
                        Guide <GradientText>Summary</GradientText>
                    </h2>
                    <GlassCard className="p-10 border-white/5 space-y-6 text-lg text-text-secondary font-medium leading-relaxed">
                        <p>
                            Trading signal apps deliver real-time trade recommendations via mobile push notifications, transforming signals from desktop-only experiences into accessible platforms. However, quality varies dramatically; approximately 60-80% deliver poor results due to unverified performance or delays. Success requires systematic evaluation, realistic expectations, and disciplined risk management.
                        </p>
                        <p>
                            Quality apps exhibit essential features: real-time push notifications, verified third-party tracking, integrated position management, educational content, and responsive support. Apps lacking these or exhibiting red flags—like unrealistic 90% win rate claims or pressure tactics—should be avoided regardless of marketing sophistication.
                        </p>
                        <p>
                            Evaluation before subscribing is critical. Research provider backgrounds, utilize trials to track performance independently, and verify notification speed across different connectivity scenarios. Most quality apps charge $50-$150 monthly and show realistic 55-70% win rates with transparent drawdown disclosures.
                        </p>
                        <p>
                            These apps suit part-time traders, beginners seeking structure, and mobile-first users. They are inappropriate for those expecting effortless passive income, under-capitalized accounts (under $2,000), or emotionally reactive personalities prone to impulsive decisions.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </Section>
    );
};

export default AppSummary;
