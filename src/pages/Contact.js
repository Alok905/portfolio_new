import { useRef } from 'react';
import './Contact.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = ({ setCursorScale }) => {
  const refForm = useRef()

  const sendEmaiil = (e) => {
    e.preventDefault()

    console.log("Called")
    emailjs.sendForm(
      "service_bo0ty2j", "template_6kz5mjm", refForm.current, "7pqH3OXHij16QyDGC"
    ).then(() => {
      alert('Message successfully sent')
      console.log("Sent")
      window.location.reload(false)
    }).catch(() => {
      alert("Failed to send the message, please try again")
    })
  }

  return <div className="page contact-page">
    <div className="contact-page-container">
      <form className="contact-form-container" ref={refForm} onSubmit={sendEmaiil}>
        <div className="form-heading">
          <h2 className='get-in-touch'>GET IN TOUCH</h2>
          <h1 className="main-form-head">Contact.</h1>
        </div>
        <div className="form-body">
          <div className="input input-name">
            <input type="text" name='name' placeholder={`What's your good name?`}  onMouseEnter={() => setCursorScale(1.7)} onMouseLeave={() => setCursorScale(1)}/>
          </div>
          <div className="input input-email">
            <input type="email" name='email' placeholder={`What's your web address?`}  onMouseEnter={() => setCursorScale(1.7)} onMouseLeave={() => setCursorScale(1)}/>
          </div>
          <div className="input input-email">
            <input type="text" name='subject' placeholder={`Subject`}  onMouseEnter={() => setCursorScale(1.7)} onMouseLeave={() => setCursorScale(1)}/>
          </div>
          <div className="input input-message">
            <textarea name="message" id="msg" className="message" placeholder="What's you want to say" cols="30" rows="10" onMouseEnter={() => setCursorScale(1.7)} onMouseLeave={() => setCursorScale(1)}></textarea>
          </div>
        </div>
        <div className="form-submit">
          <button type='submit' onMouseEnter={() => setCursorScale(1.7)} onMouseLeave={() => setCursorScale(1)}>Send email</button>
        </div>
      </form>
      <div className="contact-map-container">
        {/* <MapContainer center={[44.96366, 19.61045]} zoom={13}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={[44.96366, 19.61045]}>
            <Popup>{"Alok lives here, come over for a cup of coffee :)"}</Popup>
          </Marker>
        </MapContainer> */}
        <MapContainer center={[20.2682801, 85.7769064]} zoom={13} scrollWheelZoom={false}>
          <div className="map-card">
            <p>Alok Ranjan Joshi,</p>
            <p>OUTR,</p>
            <p>Bhubaneswar,</p>
            <p>751003</p>

            <a className="map-card-email" href='mailto:alokranjanjoshi07567@gmail.com' target='_blank'>alokranjanjoshi07567@gmail.com</a>
          </div>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[20.2682801, 85.7769064]}>
            <Popup>
              {"Alok lives here, come over for a cup of coffee :)"}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  </div>
};

export default Contact;
