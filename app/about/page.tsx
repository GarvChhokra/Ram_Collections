import React from 'react'

const page = () => {
  return (
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold leading-tight mb-4">
              About Ram Collections
            </h2>
            <p className="text-gray-700 mb-8">
              Welcome to Ram Collections! We are your go-to destination for the latest fashion trends in women's and kids' clothing. With a passion for style and quality, we offer a curated selection of clothing that suits your unique lifestyle.
            </p>
            <p className="text-gray-700">
              Join us in embracing the world of fashion, and let's make every day a stylish one.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/store_photo.jpg"
              alt="About Us"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
