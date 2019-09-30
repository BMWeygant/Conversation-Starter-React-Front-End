import React from 'react';
const Footer = () => {
    return (
        <footer className ="footer-wrapper">
            <div className="footer-github">
                Check it all out on <a target="github repo" href="https://github.com/BMWeygant/Conversation-Starter-React-Front-End.git">Github</a>!
            </div>
            <div className="footer-copyright">
                © Purple Cloud Entertainment 2013-{new Date().getFullYear()}
            </div>            
        </footer>
    )
 
}

export default Footer;
