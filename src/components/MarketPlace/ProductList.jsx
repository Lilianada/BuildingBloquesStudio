import { Link } from "react-router-dom"

const products = [
    {
      id: 1,
      name: 'Fusion',
      category: 'UI Kit',
      href: '#',
      price: '₦10,000',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
      id: 2,
      name: 'Fusion',
      category: 'UI Kit',
      href: '#',
      price: '₦10,000',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
      id: 3,
      name: 'Fusion',
      category: 'HTML Portfolio Template',
      href: '#',
      price: '₦10,000',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
      id: 4,
      name: 'Fancy',
      category: 'React Portfolio Template',
      href: '#',
      price: '₦10,000',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
  ]
  
  export default function ProductList() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-lg font-medium text-gray-900">All Available Templates</h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                  <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                  <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                    <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                      View Product
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                  <h3>
                    <Link to={`/marketplace/product/overview/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p>{product.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  