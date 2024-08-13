import React from 'react'
import Categ1 from '../assets/categ 1 (1).png'
import Categ2 from '../assets/categ 1 (2).png'
import Categ3 from '../assets/categ 1 (3).png'
import Categ4 from '../assets/categ 1 (4).png'
import Categ5 from '../assets/categ 1 (5).png'

const categoryImages = [
  { id: 1, src: Categ1, alt: 'Category 1' },
  { id: 2, src: Categ2, alt: 'Category 2' },
  { id: 3, src: Categ3, alt: 'Category 3' },
  { id: 4, src: Categ4, alt: 'Category 4' },
  { id: 5, src: Categ5, alt: 'Category 5' },
  { id: 6, src: Categ1, alt: 'Category 1' },
  { id: 7, src: Categ2, alt: 'Category 2' },
  { id: 8, src: Categ3, alt: 'Category 3' },
  { id: 9, src: Categ4, alt: 'Category 4' },
  { id: 10, src: Categ5, alt: 'Category 5' },
];

const Category = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      {/* Category Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Browse By Category</h1>
      </div>

      {/* Category Images */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categoryImages.map((category) => (
          <div key={category.id} className="flex justify-center md:w-[300px] w-[150px] mx-auto">
            <img
              src={category.src}
              alt={category.alt}
              className="w-full h-auto max-w-[150px] object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
