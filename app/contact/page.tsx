import ContactForm from "../components/ContactForm";

export default function Contact(){
    const contactInfo = {
        email: 'marco.baldan@hotmail.com',
        phone: '+44 (0) 7577717604',
        address: '39 Wellow Drive, Frome, Somerset'
      };



      return(
        <ContactForm
        title="Get in Touch"
        subtitle="We are here to help you."
        contactInfo={contactInfo}
      />          
    );
}


