// components
import Circles from '/components/Circles'

// icons
import { BsArrowRight } from 'react-icons/bs'

// framer
import { motion } from 'framer-motion'

// variants 
import { fadeIn } from '../../variants'

// UseState
import { useState } from 'react'

// Emailjs
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

function sendEmail(e) {
  e.preventDefault();

  if(name === '' || email === '' || message === ''){
    alert("Preencha todos os campos");
    return;
  }

  const templateParams = {
    from_name: name,
    message: message,
    email: email
  }

  emailjs.send("service_3k20ldq", "template_51h6sh4", templateParams, "V--wtkJC_qTyRN0Jp")
  .then((response) => {
    console.log("Email enviado", response.status, response.text)
    setName('')
    sendEmail('')
    setMessage('')
  }, (err) => {
    console.log("Erro: ", err)
  })

}
 return (
   <div className='h-full bg-primary/30'>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      {/* text & from */}
      <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className=' text-xl text-center mb-2'>
          Quer <span className='text-accent'>Trabalhar</span> comigo ?
          </motion.h2>
          <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className='h2 text-center mb-12'>
          Entre em <span className='text-accent'>contato.</span>
          </motion.h2>
          {/* form */}
          <motion.form variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" className='flex-1 flex flex-col gap-6 w-full mx-auto' onSubmit={sendEmail}>
            {/* input group */}
              <div className='flex gap-x-6 w-full'>
                <input type='text' placeholder='name' className='input' onChange={(e) => setName(e.target.value)} value={name}  />
                <input type='text' placeholder='email' className='input' onChange={(e) => setEmail(e.target.value)} value={email}  />
              </div>
                <input type='text' placeholder='subject' className='input' />
                <textarea placeholder='message' className=' textarea'onChange={(e) => setMessage(e.target.value)} value={message}  />
              <button className='btn rounded-full border border-white/50 max-w-[170px] x-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group' value="Enviar">
                  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                    Enviar
                  </span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>
          </motion.form>
        </div>
      </div>
   </div>
  );
};

export default Contact;
