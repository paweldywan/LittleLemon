const Card = ({
    image,
    name,
    price,
    description
}) => {
    return (
        <article className="card">
            <img src={image} alt={name} width="100%" />
            <div>
                <div>
                    <h4>{name}</h4>
                    <h6>{price}</h6>
                </div>
                <h6>{description}</h6>
                <h5>Order a delivery</h5>
            </div>
        </article>
    );
};

export default Card;