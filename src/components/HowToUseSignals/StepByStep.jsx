import React from 'react';
import Section from '../ui/Section';
import GradientText from '../ui/GradientText';
import { Bell, Search, Play, TrendingUp, Shield, CheckCircle2 } from 'lucide-react';

const StepByStep = () => {
    const steps = [
        {
            icon: Bell,
            number: 1,
            title: 'Receive the Signal Alert',
            description: 'You get an instant notification via your preferred method (app push notification, Discord ping, SMS text, or email).',
            details: [
                'Alert includes: ticker, entry price, targets, stop-loss, position size',
                'Typical delivery time: 30 seconds to 2 minutes from signal generation',
                'Check alert immediately—some signals have short entry windows (5-15 minutes)'
            ]
        },
        {
            icon: Search,
            title: 'Review the Signal Details',
            number: 2,
            description: 'Read the complete signal breakdown before executing. Never blindly enter without understanding the setup.',
            details: [
                'Verify you understand the ticker, direction (call/put, long/short)',
                'Check entry price range—don\'t chase if price already moved past recommended zone',
                'Review risk amount—ensure it fits your 1-2% per trade rule',
                'Read the analysis to understand WHY this trade makes sense'
            ]
        },
        {
            icon: Play,
            number: 3,
            title: 'Execute Your Entry',
            description: 'Open your broker app/platform and place the order exactly as specified in the signal.',
            details: [
                'Use limit orders at recommended entry price (not market orders)',
                'For options: verify strike price, expiration date, call/put match signal',
                'For stocks: confirm share quantity matches your position size',
                'Set alerts on your broker for target and stop-loss prices'
            ]
        },
        {
            icon: TrendingUp,
            number: 4,
            title: 'Monitor Position & Take Profits',
            description: 'Watch for target hit notifications. Take partial profits at each target level as recommended.',
            details: [
                'Target 1 (50-60% of position): Lock in quick gains, reduce risk',
                'Target 2 (30-40% of position): Let winners run further',
                'Target 3 (10-20% of position): Maximize upside on best trades',
                'Move stop-loss to breakeven after Target 1 hits (protect capital)'
            ]
        },
        {
            icon: Shield,
            number: 5,
            title: 'Honor Stop-Losses',
            description: 'If position hits stop-loss before targets, exit immediately. No exceptions, no hoping for reversals.',
            details: [
                'Stop-loss exists to protect you from catastrophic losses',
                'Never move stops further away "to give trade more room"',
                'Accept the loss, move on to next signal',
                'Most profitable traders lose 30-45% of trades—stops keep losses small'
            ]
        },
        {
            icon: CheckCircle2,
            number: 6,
            title: 'Track Your Results',
            description: 'Log every trade in a spreadsheet or trading journal. Track win rate, average gain/loss, and total P&L.',
            details: [
                'Record: date, signal, entry price, exit price, % gain/loss',
                'Calculate weekly/monthly performance',
                'Identify patterns: which signal types work best for you?',
                'Use data to improve execution and position sizing over time'
            ]
        }
    ];

    return (
        <Section className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-center text-white">
                        The Complete <GradientText>Step-by-Step Process</GradientText>
                    </h2>
                    <p className="text-xl text-text-secondary font-medium text-center mb-16 max-w-3xl mx-auto">
                        Follow this exact workflow for every signal you receive. Consistency in execution is the difference between profitable and losing traders.
                    </p>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                                            <step.icon className="text-primary" size={28} />
                                        </div>
                                        <div className="text-center">
                                            <span className="text-3xl font-black text-primary">#{step.number}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{step.title}</h3>
                                        <p className="text-lg text-text-secondary font-medium mb-6">{step.description}</p>
                                        <ul className="space-y-3">
                                            {step.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                                                    <span className="text-text-secondary font-medium text-sm">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center">
                        <h4 className="text-2xl font-black text-white mb-4">Master This Workflow</h4>
                        <p className="text-lg text-text-secondary font-medium max-w-3xl mx-auto">
                            The traders who succeed with signals aren't smarter—they're more disciplined. They follow this exact process for every single trade without deviation. Make this workflow automatic, and your results will improve dramatically.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default StepByStep;
