import thankYouImg from "../images/illustration-thank-you.svg"
import "./thank-you.css";

const ThankYou = () => {
    return (
        <div className="wrapper">
            <img className="thankYouImg" src={ thankYouImg } alt="thankYouImg" />
            <p className="selectedStars">You selected 5 out of 5</p>
            <h2 className="thankYou">Thank you!</h2>
            <p className="description">We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!</p>
        </div>
    );
}

export default ThankYou;