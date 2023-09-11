import { useState } from 'react'
import classes from './contact-form.module.css'
function ContactForm() {

    const [enterEmail, setEmail] = useState('')
    const [enterName, setName] = useState('')
    const [enterMessage, setMessage] = useState('')

    function sendMessageHandler(event) {
        event.preventDefault()
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enterEmail,
                name: enterName,
                message: enterMessage
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }


    return <section className={classes.contact}>
        <h1>How can i help you?</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email </label>
                    <input type='email' id='email' required value={enterEmail} onChange={(event) => setEmail(event.target.value)}>
                    </input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Your Name </label>
                    <input type='text' id='name' required value={enterName} onChange={(event) => setName(event.target.value)}>
                    </input>
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor='message'>Your Message </label>
                <textarea id='message' rows='5' required value={enterMessage} onChange={(event) => setMessage(event.target.value)}></textarea>
            </div>
            <div className={classes.actions}>
                <button>
                    Send message
                </button>
            </div>
        </form>

    </section>

}

export default ContactForm;