import React, { Component } from 'react'
import axios from 'axios'
import './Lists.css'

export default class Lists extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    render() {
        const loadData = async () => {

            const { data } = await axios.get("https://api.github.com/users")

            this.setState({
                list: data
            })

        }

        return (
            <div>
                <nav className="navbar navbar-expand-lg  bg-dark border-bottom border-body" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">GIT HUB API</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0  ">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQs</a>
                                </li>

                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid mt-4">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {this.state.list.map((m) => (
                            <div className="col" key={m.id}>
                                <div className="card card-hover bg-dark" data-bs-theme="dark">
                                    <img src={m.avatar_url} className="card-img-top" alt="avatar" />
                                    <div className="card-body">
                                        <p className="card-text">{m.login}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center vh-100">
                    <button className="btn d-grid mx-auto" id='fetch-btn' onClick={loadData}>CLICK ON THIS BUTTON TO DISPLAY DATA</button>
                </div>
            </div >
        )
    }
}
