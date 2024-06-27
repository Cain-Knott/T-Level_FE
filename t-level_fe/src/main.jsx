import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

function FullScreenApp() {
    useEffect(() => {
        const requestFullScreen = () => {
            const element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) { /* Safari */
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) { /* IE11 */
                element.msRequestFullscreen();
            }
        };

        requestFullScreen(); // Request full screen on component mount

        return () => {
            // Exit full screen on component unmount (optional)
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <FullScreenApp />
);
