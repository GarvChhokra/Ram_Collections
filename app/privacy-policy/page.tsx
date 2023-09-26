import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold leading-tight mb-8">
          Privacy Policy
        </h2>
        <div className="prose max-w-3xl">
          <p>
            Your privacy is important to us at Ram Collection. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
          </p>
          <p>
            Here are some key points about our Privacy Policy:
          </p>
          <ul>
            <li>
              <strong>Information Collection:</strong> We collect information such as your name, email address, and contact information when you interact with our website or make a purchase.
            </li>
            <li>
              <strong>Use of Information:</strong> We use your personal information to provide and improve our services, process orders, and communicate with you.
            </li>
            <li>
              <strong>Security:</strong> We take measures to protect your personal information and ensure its security.
            </li>
            <li>
              <strong>Third-Party Services:</strong> We may use third-party services for analytics and payment processing. Please review their respective privacy policies.
            </li>
          </ul>
          <p>
            If you have any questions or concerns regarding your privacy, please feel free to <Link href="/contact-us" className="text-blue-500 hover:underline">contact us</Link>.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
