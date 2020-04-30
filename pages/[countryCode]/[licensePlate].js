import { useRouter } from 'next/router'
import { countryCodes } from '../../models/countryCodes'
import { sanitizeLicensePlate } from '../../helpers/licensePlateHelper'
import { getMessages } from '../../helpers/apiHelper'
import moment from 'moment'

function Profile({ data }) {
    if (!data.licensePlate)
    {
        return <p>No content</p>;
    }
    
    const { licensePlate, countryCode, messages } = data;
    const country = countryCodes.find(c => c.code == countryCode);

    // get messages from server
    let list = <p>No messages yet.</p>

    if (messages.length > 0)
    {
        list = <ul>{messages.map(message => (<li>
            <div className="card">
                <div className="avatar">
                    <i className="fa fa-user-secret fa-2x"></i>
                </div>
                <div className="content">
                    <p>{message.content}</p>
                    <span><i className="fas fa-mobile-alt"></i> @ {moment.utc(message.created).local().format("YYYY-MM-DD H:mm:ss")}</span>
                </div>
            </div>
        </li>))}</ul>
    }
    
  return (
    <div className="horizontal-flex">
        <header>
            <div className="logo vertical with-margin">
                <div>
                    <h1>carmsngr</h1>
                </div>
            </div>
        </header>

        <main>
            <h2><i className={`flag-icon flag-icon-${countryCode}`}></i> {country.plateDisplay(licensePlate)}</h2>
            {list}
            <div>
            <p class="black">To submit a message send an SMS or WhatsApp message in the following format:<br /><strong>{`${countryCode},${licensePlate},{your message}`}</strong><br />(e.g. "{`${countryCode},${licensePlate},Your left brake light is broken`}")<br />to <strong>+1 (334) 367-4637</strong>.<br />Following countries are supported: cz, sk, at, de, pl</p>
            </div>
        </main>
        
    </div>
  )
}

export async function getServerSideProps({res, params}) {
    const { countryCode, licensePlate } = params

    if (!countryCode || !licensePlate)
    {
        res.statusCode = 404
        res.end('Not found')
        return
    }

    // validate country code
    let country = countryCodes.find(c => c.code == countryCode);
    let countryIsValid = country != null;
    let plateIsValid = sanitizeLicensePlate(licensePlate) == licensePlate;
    
    if (!countryIsValid || !plateIsValid)
    {
        res.statusCode = 404
        res.end('Not found')
        return
    }

    const messages = await getMessages(country.code, licensePlate);
    const data = {
        licensePlate: licensePlate,
        countryCode: country.code,
        messages: messages
    };

    return { props: {data: data}}
}

export default Profile