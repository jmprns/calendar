const Header = () => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days.map((item) => {
        return (
            <div key={item} className="border">
                <p className="text-lg text-center font-bold">{item}</p>
            </div>
        );
    });
};

export default Header;
