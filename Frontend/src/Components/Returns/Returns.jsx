import React from 'react'

export default function Returns() {
  return (
    <div className="py-8 mt-20 bg-gray-100 dark:bg-gray-800 h-4/5 ">
  <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="flex flex-col -mx-4 md:flex-row">
      <div className="px-4 md:flex-1">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img
            className="object-cover w-full h-full"
            src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
            alt="Product Image"
          />
        </div>
        <div className="flex mb-4 -mx-2">
          <div className="w-1/2 px-2">
            <button className="w-full px-4 py-2 font-bold text-white bg-gray-900 rounded-full dark:bg-gray-600 hover:bg-gray-800 dark:hover:bg-gray-700">
              Add to Cart
            </button>
          </div>
          <div className="w-1/2 px-2">
            <button className="w-full px-4 py-2 font-bold text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 md:flex-1">
        <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
          Product Name
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante
          justo. Integer euismod libero id mauris malesuada tincidunt.
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Price:
            </span>
            <span className="text-gray-600 dark:text-gray-300">$29.99</span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Availability:
            </span>
            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Select Color:
          </span>
          <div className="flex items-center mt-2">
            <button className="w-6 h-6 mr-2 bg-gray-800 rounded-full dark:bg-gray-200" />
            <button className="w-6 h-6 mr-2 bg-red-500 rounded-full dark:bg-red-700" />
            <button className="w-6 h-6 mr-2 bg-blue-500 rounded-full dark:bg-blue-700" />
            <button className="w-6 h-6 mr-2 bg-yellow-500 rounded-full dark:bg-yellow-700" />
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Select Size:
          </span>
          <div className="flex items-center mt-2">
            <button className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600">
              S
            </button>
            <button className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600">
              M
            </button>
            <button className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600">
              L
            </button>
            <button className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600">
              XL
            </button>
            <button className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600">
              XXL
            </button>
          </div>
        </div>
        <div>
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Product Description:
          </span>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            ante justo. Integer euismod libero id mauris malesuada tincidunt.
            Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
            vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
            nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
            lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
            nisl suscipit, nec tincidunt mi consectetur.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
