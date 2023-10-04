import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
    }

    ganaxleba = () => {
        const axaliSaxeli = this.inputRef.value;
        this.setState({ name: axaliSaxeli });
        window.alert('Name: ' + axaliSaxeli);
    }

    render() {
        return (
            <div>
                <input placeholder="New Name" ref={(input) => this.inputRef = input} />
                <button onClick={this.ganaxleba}>Change Name</button>
            </div>
        );
    }
}

var el = document.getElementById("root");
ReactDOM.createRoot(el).render(<App />);
