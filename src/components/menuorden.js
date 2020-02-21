import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="menu container grey-text text-darken-3">
                <h3>Orden del cliente: </h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <div className="row s2">
                        <div className="input-field col s12">
                            <label className="grey-text text-darken-3" htmlFor=" new-todo">
                                Ingrese el pedido:
                            </label>
                            <input
                                id="new-todo" type="text"
                                onChange={this.handleChange}
                                value={this.state.text}
                            />
                        </div>
                        <div className="input-field col s1"></div>
                        <button>
                            Añadir #{this.state.items.length + 1}
                        </button>
                    </div>
                </form>
            </div >
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}


export default Menu;