import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold leading-tight mb-8">
          Delivery Information
        </h2>
        <div className="prose max-w-3xl">
          <p>
            At Ram Collection, we are committed to delivering your orders in a timely and efficient manner.
          </p>
          <p>
            Our standard shipping options include standard ground shipping and expedited shipping. You can select your preferred shipping method during checkout.
          </p>
          <p>
            For more information about shipping rates and delivery times, please refer to our <Link href="/shipping-policy" className="text-blue-500 hover:underline">Shipping Policy</Link>.
          </p>
          <p>
            If you have any questions or concerns regarding your order's delivery, feel free to <Link href="/contact-us" className="text-blue-500 hover:underline">contact us</Link>.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
