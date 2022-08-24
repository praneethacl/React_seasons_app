import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './style/App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude : null,
            errorMessage: ''
        }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                 this.setState({latitude: position.coords.latitude});
            },
            (err) => {
                console.log(err);
                this.setState({errorMessage: err.message});
            }
        )
    }

    getContent() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <h1>Error: {this.state.errorMessage}</h1>
        }

        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude = {this.state.latitude}/>
        }

        return <Spinner message="please click on Allow."/>
    }

    render() {
        return (
            <div>
                {this.getContent()}
            </div>
        )
    }
}

root.render(<App />);