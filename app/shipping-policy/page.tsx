import React from 'react'

const page = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold leading-tight mb-8">
          Shipping Policy
        </h2>
        <div className="prose max-w-3xl">
          <p>
            Thank you for shopping at Ram Collection. We are committed to providing the best shopping experience for our customers, including a smooth and efficient shipping process.
          </p>
          <p>
            Here is some important information about our shipping policy:
          </p>
          <ul>
            <li>
              <strong>Shipping Methods:</strong> We offer standard ground shipping and expedited shipping options. You can select your preferred method during checkout.
            </li>
            <li>
              <strong>Shipping Rates:</strong> Shipping rates vary based on your location and the selected shipping method. You can view the shipping rates during the checkout process.
            </li>
            <li>
              <strong>Delivery Times:</strong> Delivery times may vary depending on your location and the chosen shipping method. We aim to deliver your order as quickly as possible.
            </li>
          </ul>
          <p>
            If you have any questions or concerns about our shipping policy, please feel free to <a href="/contact-us" className="text-blue-500 hover:underline">contact us</a>. We are here to assist you.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
