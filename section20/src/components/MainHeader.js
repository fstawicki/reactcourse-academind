import React from 'react'
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/welcome">Welccccc</Link>
                </li>
                <li>
                    <Link to="/products">proddddddd</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader;