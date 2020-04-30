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
			</div>
		</div>
  )
}
