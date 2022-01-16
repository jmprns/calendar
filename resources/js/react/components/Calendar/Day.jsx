const Day = ({number, event}) => {
    return (
        <div className={`border h-20 px-2 text-center ${event && 'bg-cyan-50'}`}>
            <p className="text-lg font-bold">{number}</p>
            {event && <p>{event}</p>}

        </div>
    );
}

export default Day
