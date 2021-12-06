import React from 'react';
import './Country.css';

const Country = (props) => {
      const {name, population, capital,region,timezones,flags} = props.country;
    return (
        <div className="country_detail">
            <img src={flags.png} alt=""/>
            <h3>{name.common}</h3>
            <p>Population:{population}</p>
            <p>capital:{capital}</p>
            <p>Region:{region}</p>
            <button onClick={() => props.handleAddCountry(props.country)}
            >
                Add Country</button>
           
        </div>
    );
};

export default Country;