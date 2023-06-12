import React, { useState } from 'react'

export default function CommentForm() {
    const [form, setForm] = useState({ email: "", name: "", website: "", comment: "" });
    const [active, setActive] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const { email, name, website, comment } = form;
    const onSubmit = (e) => {
        e.preventDefault();
        if (email && name && website && comment) {
            setSuccess(true);
            setTimeout(() => {
                setForm({ email: "", name: "", website: "", comment: "" });
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
            <form action="/" method="post" className="contact_form" id="contact_form_two" onSubmit={(e) => onSubmit(e)}>
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
                        id="name2"
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
                        id="email2"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="row">
                    <label>Your Website<span /></label>
                    <input onFocus={() => setActive("website")}
                        onBlur={() => setActive(null)}
                        onChange={(e) => onChange(e)}
                        value={website}
                        name="website"
                        id="website"
                        type="text"
                        placeholder="http://yourwebsite.com" />
                </div>
                <div className="row">
                    <label>Your Comments<span /></label>
                    <textarea onFocus={() => setActive("comments")}
                        onBlur={() => setActive(null)}
                        name="comment"
                        onChange={(e) => onChange(e)}
                        value={comment}
                        id="comments"
                        placeholder="Comments" />
                </div>
                <div className="row">
                    {/* <a id="send_message" href="#">Send Message</a> */}
                    <input
                        className='a'
                        type="submit"
                        id="send_message2"
                        value="Send Message"
                    />
                </div>
            </form>
            {/* /CONTACT */}
        </>


    )
}
