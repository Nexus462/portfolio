import { useState } from 'react'

export default function ContactSection() {
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  function validate() {
    const newErrors = {}
    if (!form.firstName) newErrors.firstName = 'Enter a first name.'
    if (!form.lastName) newErrors.lastName = 'Enter a last name.'
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Enter a valid email address.'
    if (!form.phone) newErrors.phone = 'Enter a phone number.'
    if (!form.message) newErrors.message = 'Enter a message.'
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // For now, just show success message
    // In production, integrate with EmailJS or similar service
    alert('Thank you for your message! I will get back to you soon.\n\nFor immediate contact, please email: sumairaayimam@gmail.com')
    setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' })
    setErrors({})
    
    // Optional: Log to console for testing
    console.log('Form submitted:', form)
  }

  return (
    <section id="contact">
      <div className="section-title">Contact Me</div>
      <div className="section-header">
        <h2>If you have any questions or want to start a project, please reach out.</h2>
        <p>Contact me by email, phone, or use the form below to send a message directly.</p>
      </div>

      <div className="contact-grid cards">
        <div className="contact-card">
          <h3>Office Location</h3>
          <p>Dessie, Ethiopia</p>
        </div>
        <div className="contact-card">
          <h3>Working Hours</h3>
          <p>Mon to Fri: 9am to 5pm</p>
          <p>Sat &amp; Sun: 9am to 3pm</p>
        </div>
        <div className="contact-card">
          <h3>Contact Details</h3>
          <p>0946200026</p>
          <a href="mailto:sumairaayimam@gmail.com">sumairaayimam@gmail.com</a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <input type="text" name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} className={errors.firstName ? 'invalid' : ''} />
            <span className="input-error">{errors.firstName}</span>
          </div>
          <div className="form-field">
            <input type="text" name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} className={errors.lastName ? 'invalid' : ''} />
            <span className="input-error">{errors.lastName}</span>
          </div>
        </div>
        <div className="form-grid">
          <div className="form-field">
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className={errors.email ? 'invalid' : ''} />
            <span className="input-error">{errors.email}</span>
          </div>
          <div className="form-field">
            <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className={errors.phone ? 'invalid' : ''} />
            <span className="input-error">{errors.phone}</span>
          </div>
        </div>
        <div className="form-field">
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className={errors.message ? 'invalid' : ''} />
          <span className="input-error">{errors.message}</span>
        </div>
        <div className="form-submit">
          <button className="button button-primary" type="submit">Submit</button>
        </div>
      </form>
    </section>
  )
}
