import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        password: "",
        supPassword: ""
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
                    <h5 className="grey-text text-darken-3">Nuevo Usuario</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">Nombre</label>
                        <input type="text" id="firstName" onChange={this.handleChange} required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastNamee">Apellido</label>
                        <input type="text" id="lastName" onChange={this.handleChange} required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Clave</label>
                        <input type="password" id="password" onChange={this.handleChange} required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="supPassword">Clave del Supervisor:</label>
                        <input type="password" id="supPassword" onChange={this.handleChange} required />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Inicia Sesión</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;