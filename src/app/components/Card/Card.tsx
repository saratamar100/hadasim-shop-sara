import React from "react";
import styles from "./Card.module.css";
interface CardProps {
    image: string;
    title: string;
    description: string;
    price: number;
}

const Card: React.FC<CardProps> = ({ image, title, description, price }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.CardImg} />  
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDescription}>{description}</p>
            <p className={styles.cardPrice}>${price.toFixed(2)}</p>
            <button className={styles.cardButton}>Add to Cart</button>
        </div>
    );
}
export default Card;