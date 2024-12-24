import Image1 from "../../assets/greek salad.jpg";
import Image2 from "../../assets/bruchetta.svg";
import Image3 from "../../assets/lemon dessert.jpg";
import Card from "../Card";

const Specials = () => {
    return (
        <div className="specials">
            <section>
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </section>

            <section>
                <Card
                    image={Image1}
                    name="Greek salad"
                    price="€12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                />
                <Card
                    image={Image2}
                    name="Bruchetta"
                    price="€5.99"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
                />
                <Card
                    image={Image3}
                    name="Lemon Dessert"
                    price="€5.00"
                    description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                />
            </section>
        </div>
    );
};

export default Specials;