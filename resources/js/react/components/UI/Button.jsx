import Spinner from "./Spinner";

const Button = ({ loading, label, type }) => {



    return (
        <button
            className={`mt-4 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white ${loading ? 'bg-cyan-300' : 'bg-cyan-600'}`}
            disabled={loading}
        >
            {loading ? <Spinner /> : label}
        </button>
    );
};

export default Button;
