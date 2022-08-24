import React from 'react';
import Spinner from './Spinner';
import './SeasonDisplay.css';
const SeasonDisplay = (props) => {
    
    const getSeason = (lat, month) => {
        if (month === 1 || month === 2) {
            return 'Spring';
        }
        else if (month >=3 && month <= 5) return 'Summer';
        else if (month === 6 || month === 7) return 'Monsoon';
        else if (month === 8 || month === 9) return 'Autum';
        else if (month === 10 || month === 11 || month === 0) return 'Winter';
        
    }

    const configSeason = {
        Spring : {
            text: "Time to turn a new leaf.",
            iconName: 'tree'
        },
        Summer : {
            text: "Time for beach and ice cream",
            iconName: 'sun'
        },
        Monsoon : {
            text: "Get your umbrealla and raincoat out, it's Monsoon!",
            iconName: 'umbrella'
        },
        Autumn : {
            text: "Fall breeze and autumn leaves.",
            iconName: 'leaf'
        },
        Winter : {
            text: "It's Chilly!!",
            iconName: 'snowflake'
        }
    }

    const season = getSeason(props.latitude, new Date().getMonth())
    const {text, iconName} = configSeason[season];
    
    return (
        <div>
            <div className={`season-display ${season}`}>
                <i className={`icon-left huge ${iconName} icon`} />
                <h1 style = {{ width : "800px"; textAlign: "justify"}}>{text}</h1>
                <i className={`icon-right huge ${iconName} icon`} />
            </div>
        </div>
    )
}

export default SeasonDisplay;