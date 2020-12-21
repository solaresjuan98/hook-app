import React from 'react';

export const Blockquote = ({quote, author}) => {
    return (
        <div>
            <blockquote className="blockquote text-right">
                <p className="mb-0">
                    {quote}
                </p>
                <br />
                <footer className="blockquote-footer">
                    {author}
                </footer>
            </blockquote>
        </div>
    )
}
