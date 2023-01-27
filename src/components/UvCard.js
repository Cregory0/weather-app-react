import LightModeIcon from "@mui/icons-material/LightMode";
import "../utilities/Gradients";

const UvCard = ({ uvi, loading }) => {
    const uvIndex = (uvi) => {
        let rating = "";
        if (uvi <= 2) {
            rating = "Low";
        } else if (uvi > 2 && uvi <= 5) {
            rating = "Moderate";
        } else if (uvi > 5 && uvi <= 7) {
            rating = "High";
        } else if (uvi > 7 && uvi <= 10) {
            rating = "Very High";
        } else if ((uvi) => 11) {
            rating = "Extreme";
        }
        return rating;
    };

    if (loading) {
        return <div></div>;
    }

    return (
        <>
            <div className="uv-card">
                <div className="uv-card__logo">
                    <svg width={0} height={0}>
                        <linearGradient
                            id="linearColors"
                            x1={1}
                            y1={0}
                            x2={1}
                            y2={1}
                        >
                            <stop offset={0} stopColor="rgba(255,180,61,1)" />
                            <stop offset={1} stopColor="rgba(255,68,0,1)" />
                        </linearGradient>
                    </svg>
                    <LightModeIcon
                        sx={{
                            fill: "url(#linearColors)",
                            fontSize: "50px",
                        }}
                    />
                </div>
                <div className="uv-card__info">
                    <div className="uv-card__info__data">
                        <h2>{uvi?.toFixed(2)} UVI</h2>
                        <p>{uvIndex(uvi)}</p>
                    </div>
                    <div className="uv-card__info__description">
                        <p>{uvIndex(uvi)} risk from UV rays</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UvCard;
