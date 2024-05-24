'use client';

import { useContactControllet } from './useContactControllet';
import FormField from './components/FormField';

const Contact: React.FC = () => {
  const { form, loading, handleChange, handleSubmit } = useContactControllet();

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
      id="contact"
    >
      <div
        className="flex-[0.75] p-8 rounded-2xl"
        style={{
          background: 'rgb(4,7,29)',
          backgroundColor:
            'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
        }}
      >
        <p className="sm:text-[18px] text-[14px] text-[#C1C2D3] uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact.
        </h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <FormField
            label="Your Name"
            name="name"
            value={form.name}
            placeholder="What's your name?"
            onChange={handleChange}
          />
          <FormField
            label="Your Email"
            name="email"
            value={form.email}
            placeholder="What's your email?"
            onChange={handleChange}
            type="email"
          />
          <FormField
            label="Your Message"
            name="message"
            value={form.message}
            placeholder="What do you want to say?"
            onChange={handleChange}
            isTextArea
          />
          <button
            type="submit"
            className="bg-black-100 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-bg-black-100 rounded-xl"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
