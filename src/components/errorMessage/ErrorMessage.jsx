import './errorMessage.scss';

const ErrorMessage = () => {
    return (
        <div className="errorMessage">
            <img src="/assets/error/error-icon.svg" alt="error" />
            Sorry, something went wrong. Try again later.
        </div>
    );
}

export default ErrorMessage;
