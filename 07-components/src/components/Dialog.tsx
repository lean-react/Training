import React from 'react';

// Transcluding von Content
const Dialog: React.FC<{title: string}> = ({ title, children }) => (
    <div className="dialog">
        <h3>{title}</h3>
        <div className="content">
            { children }
        </div>
    </div>
);

export default Dialog;
