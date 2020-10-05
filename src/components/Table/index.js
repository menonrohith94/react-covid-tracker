import React from 'react';
import './Table.css'

function Table({ countries }) {
    return (
        <div className="table">
                {countries.map(({ country, cases }, i) => (
                    <div key={i} className="table__row">
                        <div className="table__col">{country}</div>
                        <div className="table__col">
                            <strong>{cases}</strong>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Table
