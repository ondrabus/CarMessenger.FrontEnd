import { useState } from 'react'
import { countryCodes } from '../models/countryCodes'

export default function CountryCodeSelector({initialCountryCode, onCountryChange}){
    const [selectedCountryCode, setSelectedCountryCode] = useState(initialCountryCode);
    const [isOpen, setIsOpen] = useState(false);

    const setCountryCode = (code) => {
        setSelectedCountryCode(code);
        setIsOpen(false);
        onCountryChange(code);
    }

    const countries = countryCodes.map(cc => (<li onClick={e => setCountryCode(cc.code)} key={cc.code}><i className={`flag-icon flag-icon-${cc.code}`}></i> {cc.name}</li>));

    return (<React.Fragment>
                <span className="flag" onClick={e => setIsOpen(!isOpen)}>
                    <i className={`flag-icon flag-icon-${selectedCountryCode}`}></i>
                </span>
                <ul className={`menu ${isOpen ? 'open' : 'close'}`}>
                    {countries}
                </ul>
            </React.Fragment>
    )
}
