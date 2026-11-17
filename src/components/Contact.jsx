import { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.email.trim()) errs.email = 'Email address is required.';
    else if (!validateEmail(form.email)) errs.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) errs.subject = 'Subject is required.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    else if (form.message.trim().length < 20) errs.message = 'Message should be at least 20 characters.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');

    // Build mailto link as fallback since no backend is configured
    // This opens the user's email client with the message pre-filled
    try {
      const subject = encodeURIComponent(`Portfolio Contact: ${form.subject}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-xl bg-white text-[#292522] font-body text-sm placeholder-[#77716A]/60 focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field]
        ? 'border-red-400 focus:ring-red-200'
        : 'border-[#E8DED1] focus:ring-[#D97736]/30 focus:border-[#D97736]'
    }`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F1E9DC]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-[#D97736]" />
            <span className="text-[#D97736] text-xs font-semibold tracking-widest uppercase">Let's Connect</span>
            <div className="w-8 h-px bg-[#D97736]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#292522] mb-4">
            Get In <span className="text-[#D97736]">Touch</span>
          </h2>
          <p className="text-[#77716A] max-w-xl mx-auto font-body">
            Have a professional opportunity or engineering collaboration in mind? Let's connect and discuss.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact Info */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-[#292522] rounded-2xl p-8 h-full">
              <h3 className="font-heading font-bold text-white text-xl mb-2">Contact Information</h3>
              <p className="text-white/60 text-sm mb-8">Reach out through any of the channels below.</p>

              <div className="space-y-6">
                <a href={`mailto:${personalInfo.email}`} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#D97736]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D97736] transition-colors">
                    <Mail size={20} className="text-[#D97736] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Email</p>
                    <p className="text-white text-sm font-medium break-all group-hover:text-[#E9A66F] transition-colors">{personalInfo.email}</p>
                  </div>
                </a>

                <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#D97736]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D97736] transition-colors">
                    <Phone size={20} className="text-[#D97736] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Phone</p>
                    <p className="text-white text-sm font-medium group-hover:text-[#E9A66F] transition-colors">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#D97736]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#D97736]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Location</p>
                    <p className="text-white text-sm font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="mt-10 space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#D97736] text-white font-semibold rounded-xl hover:bg-[#B85E1E] transition-colors text-sm"
                >
                  <Mail size={16} />
                  Send Email
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-sm"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white rounded-2xl border border-[#E8DED1] shadow-card p-8">
              <h3 className="font-heading font-bold text-[#292522] text-xl mb-6">Send a Message</h3>

              {status === 'success' && (
                <div className="mb-6 flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-semibold text-sm">Email client opened!</p>
                    <p className="text-green-700 text-xs mt-0.5">Your message has been prepared. Please send it from your email client.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                  <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-semibold text-sm">Something went wrong.</p>
                    <p className="text-red-700 text-xs mt-0.5">Please email directly at {personalInfo.email}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#292522] text-sm font-medium mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[#292522] text-sm font-medium mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[#292522] text-sm font-medium mb-1.5">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. PCB Design Collaboration"
                    className={inputClass('subject')}
                  />
                  {errors.subject && <p className="mt-1 text-red-500 text-xs">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-[#292522] text-sm font-medium mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#D97736] text-white font-semibold rounded-xl hover:bg-[#B85E1E] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm shadow-orange"
                >
                  {status === 'submitting' ? (
                    <><Loader size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

