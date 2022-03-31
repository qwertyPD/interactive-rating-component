import iconStar from "../images/icon-star.svg";
import "./rate.css";

const Rate = () => {
    return (
        <div className="wrapper">
            <img className="iconStar" src={ iconStar } alt="iconStar" />
            <h2>How did we do?</h2>
            <p>Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
            </p>
            <ul>
                <li>
                <button className="item">1</button>
                </li>
                <li>
                <button className="item">2</button>
                </li>
                <li>
                <button className="item">3</button>
                </li>
                <li>
                <button className="item">4</button>
                </li>
                <li>
                <button className="item">5</button>
                </li>
            </ul>
            <button className="submit">SUBMIT</button>
        </div>
    );
}

export default Rate;