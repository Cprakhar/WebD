export default () => {
    return <div className="search">
        <h1 style={{color: 'whitesmoke'}}>TREE SEARCH</h1>
        <nav className="navbar ">
            <div className="container-fluid">
                <form className="d-flex m-auto w-50" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
}