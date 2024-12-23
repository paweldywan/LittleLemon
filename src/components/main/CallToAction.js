import Image from "../../assets/restauranfood.jpg";

const CallToAction = () => {
    return (
        <div className="cta">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>

            <div>
                <img src={Image} alt="Restaurant food" width="300" height="300" />
            </div>
        </div>
    );
};

export default CallToAction;