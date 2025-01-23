



import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div className="flex gap-4 justify-center items-center bg-orange-500 py-4 h-20 rounded-xl">
      <p className="text-black">© 2025 Your Company Name. All Rights Reserved.</p>
      
   
      <div className="flex gap-4 bg-orange-300">
        <a href="https://facebook.com" className="text-black hover:text-blue-600">
          Facebook
      
        </a>
        <a href="https://twitter.com" className="text-black hover:text-blue-400">
          Twitter
        </a>
        <a 
          href="https://linkedin.com" 
          className="text-black hover:text-blue-700 flex items-center gap-2"
        >
          <Linkedin className="w-5 h-5" /> 
          LinkedIn
      <div className="flex gap-4">
        <a href="https://whatsapp.com" className="text-black hover:text-blue-600  b              ">
          Whatsapp & Instagram
          </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;