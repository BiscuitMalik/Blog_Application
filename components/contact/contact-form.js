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
    const [requestStatus, steRequestStatus] = useState() //pending/error/sucess
    const [errorMessage, setErrorMesaage] = useState()

    useEffect(() => {
        if (requestStatus === 'Success' || requestStatus === 'Error') {
            const timer = setTimeout(() => {
                steRequestStatus(null);
                setErrorMesaage(null);
            }, 3000)
            return () => clearTimeout(timer);
        }
    }, [requestStatus])

    async function sendMessageHandler(event) {
        event.preventDefault()

        steRequestStatus('Pending')
        try {
            await sendContactData({
                email: enterEmail,
                name: enterName,
                message: enterMessage
            })
            steRequestStatus('Success')
            setEmail('')
            setMessage('')
            setName('')
        }
        catch (error) {
            setErrorMesaage(error.message)
            steRequestStatus('Error')
        }
    }

    let notification;

    if (requestStatus === 'Pending') {
        notification = {
            status: 'Pending',
            title: 'Sending ...',
            message: 'Message on the way'
        }
    }

    if (requestStatus === 'Success') {
        notification = {
            status: 'Success',
            title: 'Data Sent',
            message: 'Message send successfuly.'
        }
    }
    if (requestStatus === 'Error') {
        notification = {
            status: 'Error',
            title: 'Error',
            message: errorMessage
        }
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
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    </section>

}

export default ContactForm;