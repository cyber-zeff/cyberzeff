"use client"
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { SiLinktree } from 'react-icons/si';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xnnvpajw", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _replyto: formData.email,
                    _subject: `New message from ${formData.name}`
                }),
            });

            if (response.ok) {
                setSubmitSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                alert('Message Sent!');
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            alert('There was an error sending your message. Please try again later.');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='px-4 lg:px-16 py-16 md:py-24' id='Contact'>
            <div className='max-w-4xl mx-auto'>
                <h2 className='h-font text-3xl md:text-5xl text-center text-[#76925a]'>Get In Touch</h2>
                <div className="h-line mx-auto w-20 h-1 bg-[#76925a] mt-3 mb-12"></div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12'>
                    {/* Contact Methods */}
                    <div className='space-y-6'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full bg-[#76925a]/10 text-[#76925a]'>
                                <FiMail size={24} />
                            </div>
                            <div>
                                <h3 className='font-medium text-lg'>Email</h3>
                                <Link href="mailto:cyberzeff.me@gmail.com" className='text-gray-600 hover:text-[#76925a] transition-colors'>
                                    cyberzeff.me@gmail.com
                                </Link>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full bg-[#76925a]/10 text-[#76925a]'>
                                <FiPhone size={24} />
                            </div>
                            <div>
                                <h3 className='font-medium text-lg'>Phone</h3>
                                <Link href="tel:+923249276352" className='text-gray-600 hover:text-[#76925a] transition-colors'>
                                    +92 324 9276352
                                </Link>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='p-3 rounded-full bg-[#76925a]/10 text-[#76925a]'>
                                <SiLinktree size={24} />
                            </div>
                            <div>
                                <h3 className='font-medium text-lg'>All Links</h3>
                                <Link href="https://linktr.ee/cyberzeff" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-[#76925a] transition-colors'>
                                    linktr.ee/cyberzeff
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Social Media and Form */}
                    <div className='space-y-6'>
                        <h3 className='text-xl font-medium'>Connect With Me</h3>
                        <div className='flex flex-wrap gap-4'>
                            <Link href="https://github.com/cyber-zeff" target="_blank" rel="noopener noreferrer" className='p-4 rounded-full bg-[#76925a]/10 text-[#76925a] hover:bg-[#76925a]/20 transition-colors'>
                                <FiGithub size={24} />
                            </Link>
                            <Link href="https://linkedin.com/in/cyber-zeff" target="_blank" rel="noopener noreferrer" className='p-4 rounded-full bg-[#76925a]/10 text-[#76925a] hover:bg-[#76925a]/20 transition-colors'>
                                <FiLinkedin size={24} />
                            </Link>
                            <Link href="https://x.com/cyberzeff" target="_blank" rel="noopener noreferrer" className='p-4 rounded-full bg-[#76925a]/10 text-[#76925a] hover:bg-[#76925a]/20 transition-colors'>
                                <FaXTwitter size={24} />
                            </Link>
                            <Link href="https://instagram.com/cyberzeff" target="_blank" rel="noopener noreferrer" className='p-4 rounded-full bg-[#76925a]/10 text-[#76925a] hover:bg-[#76925a]/20 transition-colors'>
                                <FaInstagram size={24} />
                            </Link>
                        </div>

                        {/* Contact Form */}
                        <div className='mt-8'>
                            <h3 className='text-xl font-medium mb-4'>Send Me a Message</h3>
                            <form className='space-y-4' onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#76925a] focus:outline-none'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#76925a] focus:outline-none'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#76925a] focus:outline-none'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className='px-6 py-2 bg-[#76925a] text-white rounded-lg hover:bg-[#5a7245] transition-colors disabled:opacity-50'
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                                {submitSuccess && (
                                    <div className="p-3 text-green-700 bg-green-100 rounded-lg">
                                        <b>Message sent successfully!</b>
                                        <br />
                                        You will receive a reply via email within 6 hours.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}