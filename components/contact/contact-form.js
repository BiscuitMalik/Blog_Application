import { useState, useEffect } from 'react'
import classes from './contact-form.module.css'
import Notification from '../ui/notification'

async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function ContactForm() {
    const [enterEmail, setEmail] = useState('')
    const [enterName, setName] = useState('')
    const [enterMessage, setMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState() // pending/error/success
    const [errorMessage, setErrorMessage] = useState()

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setErrorMessage(null);
            }, 3000)
            return () => clearTimeout(timer);
        }
    }, [requestStatus])

    async function sendMessageHandler(event) {
        event.preventDefault()

        setRequestStatus('pending')
        try {
            await sendContactData({
                email: enterEmail,
                name: enterName,
                message: enterMessage
            })
            setRequestStatus('success')
            setEmail('')
            setMessage('')
            setName('')
        }
        catch (error) {
            setErrorMessage(error.message)
            setRequestStatus('error')
        }
    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending ...',
            message: 'Message on the way'
        }
    }

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Data Sent',
            message: 'Message sent successfully.'
        }
    }
    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error',
            message: errorMessage
        }
    }

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email </label>
                        <input type='email' id='email' required value={enterEmail} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'>Your Name </label>
                        <input type='text' id='name' required value={enterName} onChange={(event) => setName(event.target.value)} />
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
            {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
        </section>
    );
}

export default ContactForm;
