import banner from '../../../../public/banner.jpeg'

const Banner = () => {
    return (
        <div className="hero min-h-[70vh]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold text-cyan-400">Harmony & Togetherness: A Social Gathering for All</h1>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;