import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold leading-tight mb-8">
          Terms and Conditions
        </h2>
        <div className="prose max-w-3xl">
          <p>
            Welcome to Ram Collection. By accessing and using our website, you agree to comply with and be bound by these Terms and Conditions.
          </p>
          <p>
            Here are some key points about our Terms and Conditions:
          </p>
          <ul>
            <li>
              <strong>Website Use:</strong> You may use our website for shopping and information purposes. Any unauthorized use is prohibited.
            </li>
            <li>
              <strong>Privacy:</strong> Your privacy is important to us. Please review our <Link href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
            </li>
            <li>
              <strong>Intellectual Property:</strong> All content on our website is protected by copyright and intellectual property laws.
            </li>
            <li>
              <strong>Limitation of Liability:</strong> We are not liable for any damages or losses incurred while using our website or products.
            </li>
          </ul>
          <p>
            If you have any questions or concerns about these terms, please feel free to <Link href="/contact-us" className="text-blue-500 hover:underline">contact us</Link>.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
