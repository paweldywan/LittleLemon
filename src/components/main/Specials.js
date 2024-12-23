import Image from "../../assets/greek salad.jpg";

const Specials = () => {
    return (
        <div className="specials">
            <section>
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </section>

            <section>
                <article className="card">
                    <img src={Image} alt="Greek salad" width="100%" />
                    <div>
                        <h4>Greek salad</h4>
                        <h6>$12.99</h6>
                    </div>
                    <h6>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</h6>
                    <h5>Order a delivery</h5>
                </article>

                <article className="card">
                    <img src={Image} alt="Greek salad" width="100%" />
                    <div>
                        <h4>Greek salad</h4>
                        <h6>$12.99</h6>
                    </div>
                    <h6>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</h6>
                    <h5>Order a delivery</h5>
                </article>

                <article className="card">
                    <img src={Image} alt="Greek salad" width="100%" />
                    <div>
                        <h4>Greek salad</h4>
                        <h6>$12.99</h6>
                    </div>
                    <h6>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</h6>
                    <h5>Order a delivery</h5>
                </article>
            </section>
        </div>
    );
};

export default Specials;