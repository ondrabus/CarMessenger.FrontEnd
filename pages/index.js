import LicensePlateForm from '../components/licensePlateForm'

export default function Home() {



  return (
		<div className="horizontal-flex">
			<div className="vertical-flex">
				<header>
					<div className="logo">
						<div>
							<h1>carmessenger</h1>
							<span>Don't shout. Send a message.</span>
						</div>
					</div>
				</header>

				<LicensePlateForm initialCountryCode="cz"></LicensePlateForm>

				<div>
					<p class="black">To submit a message send an SMS or WhatsApp message in the following format:<br /><strong>{'{countryCode},{license plate},{your message}'}</strong><br />(e.g. "cz,1ab 1563,Your left brake light is broken")<br />to <strong>+1 (334) 367-4637</strong>.</p>
				</div>
			</div>
		</div>
  )
}
