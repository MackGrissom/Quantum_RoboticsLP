import React, { useState } from 'react'

export default function ContactForm() {
    const [form, setForm] = useState({ email: "", name: "", subject: "", msg: "" });
    const [active, setActive] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const { email, name, subject, msg } = form;
    const onSubmit = (e) => {
        e.preventDefault();
        if (email && name && subject && msg) {
            setSuccess(true);
            setTimeout(() => {
                setForm({ email: "", name: "", subject: "", msg: "" });
                setSuccess(false);
            }, 2000);
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
        }
    };
    return (
        <>
            {/* CONTACT */}
            <form action="/" method="post" className="contact_form" id="contact_form" onSubmit={(e) => onSubmit(e)}>
                <div className="returnmessage" data-success="Your message has been received, We will contact you soon." style={{ display: success ? "block" : "none" }}>
                    <span className="contact_success">
                        Your message has been received, we will contact you soon.
                    </span>
                </div>
                <div className="empty_notice"
                    style={{ display: error ? "block" : "none" }}
                >
                    <span>Please Fill Required Fields</span></div>
                <div className={`row ${active === "name" || name ? "active" : ""
                    }`} >
                    <label>Full Name<span /></label>
                    <input onFocus={() => setActive("name")}
                        onBlur={() => setActive(null)}
                        onChange={(e) => onChange(e)}
                        value={name}
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name"
                    />
                </div>
                <div className="row">
                    <label>Your E-mail<span /></label>
                    <input onFocus={() => setActive("email")}
                        onBlur={() => setActive(null)}
                        onChange={(e) => onChange(e)}
                        value={email}
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="row">
                    <label>Your Subject<span /></label>
                    <input onFocus={() => setActive("subject")}
                        onBlur={() => setActive(null)}
                        onChange={(e) => onChange(e)}
                        value={subject}
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder="Subject" />
                </div>
                <div className="row">
                    <label>Your Message<span /></label>
                    <textarea onFocus={() => setActive("message")}
                        onBlur={() => setActive(null)}
                        name="msg"
                        onChange={(e) => onChange(e)}
                        value={msg}
                        id="message"
                        placeholder="Message" />
                </div>
                <div className="row">
                    {/* <a id="send_message" href="#">Send Message</a> */}
                    <input
                        className='a'
                        type="submit"
                        id="send_message"
                        value="Send Message"
                    />
                </div>
            </form>
            {/* /CONTACT */}
        </>


    )
}
