import Link from "next/link";

export default function FirstPost() {
    return (
        <>
            <h1>Contact us</h1>


            <form name="contact" method="POST" data-netlify="true">
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
            </form>
            
            <Link href="/">Back to Home</Link>


        </>
    )
}