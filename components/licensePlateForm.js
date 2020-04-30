import { useState } from 'react'
import Router from 'next/router'
import { sanitizeLicensePlate } from '../helpers/licensePlateHelper'
import CountryCodeSelector from './countryCodeSelector'

export default function LicensePlateForm({initialCountryCode}){
    const [selectedCountryCode, setSelectedCountryCode] = useState(initialCountryCode)
	const [licensePlate, setLicensePlate] = useState('')

    const submitMessage = (e) => {
		if (!licensePlate)
		{
			alert('Provide a license plate');
			return;
		}
		Router.push(`/submit/${selectedCountryCode}/${licensePlate}`);
        // redirect to submit message page
    }
    const showMessages = (plate) => {
		if (!licensePlate)
		{
			alert('Provide a license plate');
			return;
		}
		// redirect to show messages page
		Router.push(`/${selectedCountryCode}/${licensePlate}`);
    }


    return (<React.Fragment>
                <form onSubmit={(e) => showMessages(e)}>
					<fieldset>
						<label htmlFor="licensePlate">License plate</label>
						<div className="input-pre">
							<CountryCodeSelector initialCountryCode="cz" onCountryChange={e => setSelectedCountryCode(e)}></CountryCodeSelector>
							<input type="text" placeholder="3AB 5428" value={licensePlate} onChange={e => setLicensePlate(sanitizeLicensePlate(e.target.value))} />
						</div>
					</fieldset>
				</form>

				<div className="buttons">
					<div>
						<button disabled="disabled" className="button button-large" onClick={(e) => submitMessage(e)}>Submit a message</button>
					</div>
					<div>
						<button type="submit" className="button button-large button-outline" onClick={(e) => showMessages(e)}>Show messages</button>
					</div>
                </div>
            </React.Fragment>
    )
}
