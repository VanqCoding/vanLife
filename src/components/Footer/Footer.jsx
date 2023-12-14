import React from 'react';
import './Footer.css'; // Import CSS for styling

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} #VANLIFE</p>
        </footer>
    );
}

export default Footer;