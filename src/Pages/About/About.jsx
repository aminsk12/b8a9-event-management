import about from "../../../public/about.jpg"


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  lg:gap-16 justify-between">
                <img src={about} className=" flex-1 rounded-lg lg:gap-16 shadow-2xl" />
                <div className="flex-1">
                    <h1 className="text-5xl font-bold">Harmony & Togetherness: A Social Gathering for All</h1>
                    <p className="py-6">
                        Join us for a heartwarming social gathering that celebrates the bonds of friendship, community, and the joy of coming together. "Harmony & Togetherness" is more than just an event; it's an opportunity to connect with old friends, make new ones, and revel in the shared experiences that enrich our lives.

                        🌟 Event Highlights:

                        Community Connection: Embrace the spirit of togetherness as we come together to celebrate the ties that bind us.
                        Live Music & Entertainment: Enjoy live performances and entertainment that will set the mood for a night of laughter and celebration.
                        Delicious Food & Beverages: Savor a variety of culinary delights and refreshments, from appetizers to decadent desserts.
                        Activities & Games: Engage in fun and interactive activities that foster camaraderie and laughter among attendees.
                        Photo Booth Fun: Capture the memories with friends and loved ones in our themed photo booths.
                        Positive Vibes: Experience an atmosphere filled with positivity, warmth, and the joy of being surrounded by a like-minded community.
                        Networking Opportunities: Connect with new people, share stories, and build lasting friendships.
                        Social Causes: Support local charities and social causes as part of our commitment to giving back to the community.
                        Event Planning: Our dedicated event planners ensure that every detail is meticulously executed to make this social gathering truly unforgettable.
                        A Celebration of Friendship:
                        Whether you're reconnecting with old friends, making new acquaintances, or simply enjoying the company of those who share your values, "Harmony & Togetherness" is your chance to celebrate the beauty of human connection. We believe that social events are an opportunity to foster relationships, create memories, and build a stronger, more united community.

                        So, save the date and join us for an evening of harmony, togetherness, and joyful celebration. Contact us today to be part of this wonderful social gathering and let's create an event that promotes friendship, unity, and the shared spirit of our community. Because at "Harmony & Togetherness," we believe in the power of connection to make the world a better place. 🎉🤝❤️</p>

                </div>
            </div>
        </div>
    );
};

export default About;