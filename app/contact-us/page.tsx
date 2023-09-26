import React from 'react'
import GoogleMap from '../store-locator/GoogleMap'
import ContactUsForm from './ContactUsForm'

const page = () => {
  return (
    <div>
        <>
        <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold leading-tight mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div>
                <GoogleMap/>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <address className="text-gray-700">
              <p>
                <strong>Ram Collections Store</strong>
              </p>
              <p>
                Tilak Road
              </p>
              <p>
                Rishikesh, Uttarakhand, 249201
              </p>
              <p>
                Email: <a href="mailto:ramrksh@gmail.com">ramrksh@gmail.com</a>
              </p>
              <p>
                Phone: <a href='tel:9719931025'>+91 9719931025</a>
              </p>
            </address>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </section>
        </>
    </div>
  )
}

export default page
