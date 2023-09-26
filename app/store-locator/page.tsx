import React from 'react'
import GoogleMap from './GoogleMap'

const page = () => {
  return (
    <div>
      <>
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold leading-tight mb-8">
          Store Locator
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-15">
          <div className="col-span-2">
                <GoogleMap/>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mb-4">Store Location</h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>Ram Collections Store</strong>
                <p>Tilak Road, Rishikesh, Uttarakhand, 249201</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
      </>
    </div>
  )
}

export default page
