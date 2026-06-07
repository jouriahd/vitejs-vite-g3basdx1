import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(JSON.stringify(form));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Support</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br />
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" /><br />
        
        <label>Email</label><br />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" /><br />
        
        <label>Message</label><br />
        <textarea name="message" value={form.message} onChange={handleChange} rows="4" /><br />
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;