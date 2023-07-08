import Image from "next/image";
import contactUsSVG from "@/assets/images/contact-us.svg";

const ContactUs = () => {
  return (
    <section
      className="app-layout md:flex-row md:py-12 flex flex-col-reverse items-center justify-around w-full gap-16 py-6 my-12"
      id="contact-us"
    >
      <form className="md:w-1/2 flex flex-col w-full gap-2">
        <div className="mb-8 space-y-4">
          <h2 className=" md:text-left mt-10 mb-5 text-5xl font-bold text-center">
            Contact Us
          </h2>
          <p className="text-secondary md:text-left text-sm text-center">
            Want to join our team or have interesting proposition for us?
            <br />
            <span className="text-primary font-bold">Leave the message!</span>
          </p>
        </div>

        <input className="input " type="text" placeholder="Name" name="name" />
        <input
          className="input "
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="input resize-none"
          rows={8}
          type="textarea"
          placeholder="Your Message"
          name="name"
        />
        <button
          type="button"
          className="border-primary hover:shadow-none focus-within:shadow-none text-primary w-fit self-end px-6 py-2 mt-4 font-semibold uppercase bg-transparent border-2 rounded-full shadow-lg"
        >
          Send Message
        </button>
      </form>

      <div className="">
        <Image src={contactUsSVG} alt="hero-image" width={500} />
      </div>
    </section>
  );
}

export default ContactUs