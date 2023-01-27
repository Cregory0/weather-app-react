import LocationInfo from "./LocationInfo";
import logo from "../assets/images/logo.png";
import { Search } from "react-bootstrap-icons";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import "react-toggle/style.css";

const Header = ({
    input,
    setInput,
    setSearchTerm,
    currentWeather,
    loading,
    location,
    country,
    timeZone,
    mode,
    setMode,
}) => {
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(input);
    };

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="sun-cloud-logo" height={50} width={50} />
                <div className="header__logo__info">
                    <h1>Weather App</h1>
                    <p>By Craig Gregory</p>
                </div>
            </div>
            <DarkModeToggle
                mode={mode}
                dark="Dark"
                light="Light"
                onChange={(mode) => {
                    setMode(mode);
                }}
            />
            <LocationInfo
                currentWeather={currentWeather}
                loading={loading}
                location={location}
                country={country}
                timeZone={timeZone}
            />
            <form
                onSubmit={handleSubmit}
                name="search"
                className="header__searchbar"
            >
                <Search />
                <input
                    placeholder="Search anything..."
                    type="text"
                    name="search"
                    value={input}
                    onChange={handleChange}
                ></input>
            </form>
        </header>
    );
};

export default Header;
