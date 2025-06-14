import { useState, useRef } from "react";
import PillarCard from "./PillarCard";
import './component-styles/PillarSection.css';
import { pillarData, pillarList } from "../content/pillars";

const PillarsSection = () => {
    const [activePillar, setActivePillar] = useState('Nutrition');
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="pillars-section">
            <div className="app-container">
                <div className="pillars-header">
                    <div className="pillars-title">
                        <h3>HOW IT WORKS</h3>
                        <h2><span className="highlight-text">Lifestyle as medicine:</span> The six pillars</h2>
                    </div>

                    {/* Nav buttons hidden on mobile */}
                    <div className="pillars-nav-buttons hide-on-mobile">
                        <button onClick={() => scroll('left')}>&larr;</button>
                        <button onClick={() => scroll('right')}>&rarr;</button>
                    </div>
                </div>

                {/* Pillar list hidden on mobile */}
                <div className="pillars-tabs hide-on-mobile">
                    {pillarList.map(pillar => (
                        <button key={pillar} className={`pillar-tab ${activePillar === pillar ? 'active' : ''}`} onClick={() => setActivePillar(pillar)}>
                            {pillar}
                        </button>
                    ))}
                </div>

                <div className="pillars-content" ref={scrollContainerRef}>
                    {pillarData.map(data => <PillarCard key={data.title} {...data} />)}
                </div>
            </div>
        </section>
    );
};

export default PillarsSection;
