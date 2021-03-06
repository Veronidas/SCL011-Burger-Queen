import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        name: "",
        password: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Inicia Sesión</h5>
                    <div className="input-field">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" onChange={this.handleChange} required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Clave</label>
                        <input type="password" id="password" onChange={this.handleChange} required />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Inicia Sesión</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;