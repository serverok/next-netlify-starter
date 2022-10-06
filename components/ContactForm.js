export default function ContactForm() {
    return (
        <form name="contact" auction="/success" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label htmlFor="name">
                    Your Name:
                </label> 
                <input type="text" name="name" id="name" />
            </p>
            <p>
                <label htmlFor="youremail">
                    Your Email:
                </label> 
                <input type="email" name="email" id="email" />
            </p>
            <p>
                <label htmlFor="yourmessage">
                Message:
                </label> 
                <textarea name="message" id="message"></textarea>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}