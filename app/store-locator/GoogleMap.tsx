const GoogleMap = () => {
    return (
      <div className="relative h-96">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.6067896314253!2d78.29053487541579!3d30.105445774892907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e748063f12b%3A0x3743dd03a34dd0bf!2sRAM%20COLLECTIONS!5e0!3m2!1sen!2sca!4v1695602756083!5m2!1sen!2sca"
          width={600}
          height={400}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default GoogleMap;
  