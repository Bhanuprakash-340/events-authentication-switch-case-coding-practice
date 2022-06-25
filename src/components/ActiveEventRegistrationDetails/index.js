import './index.css'

const registrationStatus = {
  yetToRegistered: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderYetToRegisterView = () => (
    <div className="register-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-image"
      />
      <p className="register-content">
        {' '}
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        {' '}
        Register Here
      </button>
    </div>
  )

  const renderNoActiveEvent = () => (
    <p className="no-active-event-text">
      Click on an event, to view its registration details
    </p>
  )

  const alreadyRegistered = () => (
    <div className="registered-event">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="tick-mark"
      />
      <h1 className="text"> You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="registrations-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="closed-heading"> Registrations Are Closed Now!</h1>
      <p className="closed-context">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegistered:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return alreadyRegistered()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosed()
      default:
        return renderNoActiveEvent()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}
export default ActiveEventRegistrationDetails
