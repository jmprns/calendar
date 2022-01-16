const ErrorToast = ({toastProps, message, errors }) => {


    const errs = []

    for (var key in errors) {
        if (errors.hasOwnProperty(key)) {
            errs.push(...errors[key])
        }
    }

    return (
        <div>
            <h3><strong>{message}</strong></h3>

            <ul>
                {errs.map((item, key) => {
                    return <li key={key} className="mt-3">❌ {item}</li>
                })}
            </ul>
        </div>
    )
}

export default ErrorToast
