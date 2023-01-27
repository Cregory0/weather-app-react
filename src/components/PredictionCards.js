import React from "react";
import { Wind, CloudDrizzle } from "react-bootstrap-icons";

const PredictionCards = ({
    icon,
    color,
    date,
    weather,
    tempHigh,
    tempLow,
    precipitation,
    wind,
}) => {
    return (
        <div className="prediction-card">
            <div className="prediction-card__top">
                <div>
                    <p>{date}</p>
                    <p>{weather}</p>
                </div>
                <div>
                    {React.createElement(icon, {
                        size: "45",
                        color: `url(#linear-${color})`,
                    })}
                </div>
            </div>
            <div className="prediction-card__bottom">
                <div className="wind-precipitation">
                    <div className="wind-daily">
                        <Wind size={20} color={"#e54d16"} />
                        <p>{wind.toFixed(1)}km/h</p>
                    </div>

                    <div className="precipitation-daily">
                        <CloudDrizzle size={20} color={"#e54d16"} />
                        <p>{(precipitation * 100).toFixed(0)}%</p>
                    </div>
                </div>
                <div className="daily-minmax">
                    <p>
                        {tempHigh}° / {tempLow}°
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PredictionCards;
