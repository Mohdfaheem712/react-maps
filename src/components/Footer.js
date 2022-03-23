import React from 'react'

export default function Footer(props) {
    return (
        <div className="footer-copyright text-center py-1 bg-dark">
            <p className="text-center text-white my-3">
                &copy; {(new Date().getFullYear())} React App By&nbsp;&nbsp;
                <a href="https://github.com/Mohdfaheem712/"> 
                 Faheem
                </a>
            </p>
        </div>
    )
}