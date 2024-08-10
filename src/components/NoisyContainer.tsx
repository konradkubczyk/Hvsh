export default function NoisyContainer({children}: { className?: string, children?: React.ReactNode }) {
    return (
        <div className="noise-container">
            <Noise/>
            <div className="noise-children-wrapper">
                {children}
            </div>
        </div>
    );
}

function Noise() {
    return (
        <svg className="noise-svg" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise-filter">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    stitchTiles="stitch"
                />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise-filter)"/>
        </svg>
    );
}
