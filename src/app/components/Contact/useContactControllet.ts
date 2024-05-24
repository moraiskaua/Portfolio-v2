import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { env } from '@/constants/env';
import { ChangeEvent, FormEvent, useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}
export const useContactControllet = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return toast.error('Please fill out all fields.');
    }

    setLoading(true);

    try {
      await emailjs.send(
        env.SERVICE_ID,
        env.TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: 'Kauã Morais',
          to_email: 'moraiskaua.dev@gmail.com',
        },
        env.PUBLIC_KEY,
      );
      setLoading(false);
      toast.success('Thank you. I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return { form, loading, handleChange, handleSubmit };
};
