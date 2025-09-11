// components/ContactForm.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', appType: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill all fields.');
      return;
    }
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus('Message sent!');
    } else {
      setStatus('Error sending message.');
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-2 border rounded focus:outline-none focus:border-primary transition-colors" required />
      <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-2 border rounded focus:outline-none focus:border-primary transition-colors" required />
      <select value={formData.appType} onChange={(e) => setFormData({...formData, appType: e.target.value})} className="w-full p-2 border rounded focus:outline-none focus:border-primary transition-colors" required>
        <option value="">Select App</option>
        <option value="Serwex">Serwex (Users)</option>
        <option value="Serwex Partner">Serwex Partner (Vendors)</option>
      </select>
      <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-2 border rounded h-32 focus:outline-none focus:border-primary transition-colors" required />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition-colors shadow-soft">Send</button>
      <p className="text-accent">{status}</p>
    </motion.form>
  );
};

export default ContactForm;