import React, { useState } from 'react';
import axios from 'axios';
import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Using react-icons for Whatsapp as Lucide might not have brand icons perfectly

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name field is required!';
        if (!formData.email) {
            newErrors.email = 'Email field is required!';
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email.toLowerCase())) {
            newErrors.email = 'Incorrect email format!';
        }
        if (!formData.subject) newErrors.subject = 'Subject field is required!';
        if (!formData.content) newErrors.content = 'Content field is required!';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        const payload = new FormData();
        Object.keys(formData).forEach(key => payload.append(key, formData[key]));
        payload.append('_next', '/#contact');
        payload.append('_captcha', 'false');

        try {
            await axios.post("https://formsubmit.co/rdanang.dev@gmail.com", payload);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', content: '' });
            setTimeout(() => setSubmitStatus(null), 3000);
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    return (
        <div className="flex w-full min-h-screen items-center justify-center py-20">
            <div className="flex flex-col w-full">
                {/* Heading */}
                <div className="flex flex-row items-center mb-10">
                    <span className="text-primary text-2xl md:text-3xl font-bold pr-4 bg-background z-10">
                        Contact
                    </span>
                    <hr className="border-primary w-full opacity-50" />
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Form */}
                    <div className="w-full lg:w-2/3">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-1/2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-bold text-foreground">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Name"
                                        className="w-full px-3 py-2 text-sm bg-background border border-border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                    {errors.name && <span className="text-xs text-destructive mt-1 block">{errors.name}</span>}
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-foreground">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Name@Domain.Tld"
                                        className="w-full px-3 py-2 text-sm bg-background border border-border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                    {errors.email && <span className="text-xs text-destructive mt-1 block">{errors.email}</span>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-bold text-foreground">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                                {errors.subject && <span className="text-xs text-destructive mt-1 block">{errors.subject}</span>}
                            </div>

                            <div className="relative">
                                <label htmlFor="content" className="block mb-2 text-sm font-bold text-foreground">
                                    Content
                                </label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    maxLength={300}
                                    rows={8}
                                    placeholder="Leave your message here.."
                                    className="w-full px-3 py-2 text-sm bg-background border border-border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                />
                                <span className="absolute bottom-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                                    {300 - formData.content.length}
                                </span>
                                {errors.content && <span className="text-xs text-destructive mt-1 block">{errors.content}</span>}
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="border border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit!'}
                                </button>

                                {submitStatus === 'success' && (
                                    <span className="text-primary font-medium">Message Sent!</span>
                                )}
                                {submitStatus === 'error' && (
                                    <span className="text-destructive font-medium">Oops, Something Went Wrong!</span>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Social Links */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-6 lg:mt-8">
                        <a href="https://github.com/rdanang-dev" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                            <Github className="w-10 h-10 group-hover:text-[#181717]" />
                            <span className="text-lg">Github</span>
                        </a>
                        <a href="https://www.instagram.com/ikan_gondrong" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                            <Instagram className="w-10 h-10 group-hover:text-[#E4405F]" />
                            <span className="text-lg">Instagram</span>
                        </a>
                        <a href="https://wa.me/+6285718530636?text=Hallo%20Danang%2C%20I%20liked%20to%20use%20your%20service%2C%20please%20contact%20me%20at%20%2E%2E%2E%2E%2E" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                            <FaWhatsapp className="w-10 h-10 group-hover:text-[#25D366]" />
                            <span className="text-lg">WhatsApp</span>
                        </a>
                        <a href="https://www.linkedin.com/in/ridho-danang-sanyoto" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                            <Linkedin className="w-10 h-10 group-hover:text-[#0A66C2]" />
                            <span className="text-lg">LinkedIn</span>
                        </a>
                        <a href="mailto:rdanang.dev@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                            <Mail className="w-10 h-10 group-hover:text-[#EA4335]" />
                            <span className="text-lg">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
