import { useContactControllet } from './useContactControllet';
import FormField from './components/FormField';

const Contact: React.FC = () => {
  const { t, form, loading, handleChange, handleSubmit } =
    useContactControllet();

  return (
    <section className="w-full justify-center xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden z-50">
      <div
        className="flex-[0.75] p-8 rounded-2xl"
        style={{
          background: 'rgb(4,7,29)',
          backgroundColor:
            'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
        }}
      >
        <p className="sm:text-[18px] text-[14px] text-[#C1C2D3] uppercase tracking-wider">
          {t('Form.Title')}
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          {t('Form.Description')}
        </h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <FormField
            label={t('Form.InputName.Label')}
            name="name"
            value={form.name}
            placeholder={t('Form.InputName.Placeholder')}
            onChange={handleChange}
          />
          <FormField
            label={t('Form.InputEmail.Label')}
            name="email"
            value={form.email}
            placeholder={t('Form.InputEmail.Placeholder')}
            onChange={handleChange}
            type="email"
          />
          <FormField
            label={t('Form.InputMsg.Label')}
            name="message"
            value={form.message}
            placeholder={t('Form.InputMsg.Placeholder')}
            onChange={handleChange}
            isTextArea
          />
          <button
            type="submit"
            className="bg-black-100 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-bg-black-100 rounded-xl"
            disabled={loading}
          >
            {loading ? t('Form.Button.isLoading') : t('Form.Button.Text')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
