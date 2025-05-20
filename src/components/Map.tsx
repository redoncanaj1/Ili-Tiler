import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md h-full min-h-[300px] md:min-h-[400px]">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d596.8359747152052!2d-1.8978023392923276!3d52.44887181012797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc14139b92c3%3A0x405de26d7e0a4574!2sMoorcroft%20Rd%2C%20Birmingham%2C%20UK!5e1!3m2!1sen!2s!4v1747772356007!5m2!1sen!2s" width="100%" height="450"  ></iframe>
    </div>
  );
};

export default Map;