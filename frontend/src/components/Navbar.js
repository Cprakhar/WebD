import { Link } from "react-router-dom"

// eslint-disable-next-line
export default () => {
    return <nav className="navbar navbar-expand-lg bg-success bg-opacity-75">
        <div class="container-fluid">
            <a className="navbar-brand" href="/">Prakriti</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    <Link className="nav-link" to="/treemap">Tree map</Link>
                    <a className="nav-link" href="/">Contact us</a>
                </div>
            </div>
        </div>
    </nav>
}
