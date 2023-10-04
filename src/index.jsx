import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '', // Initialize the name state with an empty value
        };
    }

    // Function to update the name state and display it in an alert
    updateName = () => {
        const newName = prompt('Enter a new name:');
        if (newName !== null) { // Check if the user clicked "Cancel"
            this.setState({ name: newName });
            window.alert('Name updated to: ' + newName);
        }
    }

    render() {
        return (
            <div>
                <h1>React Variable Example</h1>
                <p>Variable name: {this.state.name}</p>
                <button onClick={this.updateName}>Change Name</button>
            </div>
        );
    }
}

var el = document.getElementById("root");
ReactDOM.createRoot(el).render(<App />);