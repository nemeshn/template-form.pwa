import React from 'react';

import './index.css';
import './img/logo.png';

export default function Header() {
    return(
        <div className="header pure.css pure-menu-horizontal pure-menu-fixed">
            <a href="/"><img className="logo" src="./img/logo.png" /></a>
            <h4 className="label">AnimeQuest</h4>
        </div>
    )
}