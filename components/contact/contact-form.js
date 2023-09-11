import classes from './contact-form.module.css'

function ContactForm() {
    return <section className={classes.contact}>
        <h1>How can i help you?</h1>
        <form className={classes.form}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email </label>
                    <input type='email' id='email' required>
                    </input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Your Email </label>
                    <input type='text' id='name' required>
                    </input>
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor='message'>Your Message </label>
                <textarea id='message' rows='5'></textarea>
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