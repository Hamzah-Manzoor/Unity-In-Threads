import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import ProductsCard from './ProductsCard';


interface ProductTypes {
  [key: string]: string[];
}

interface Product {
  id: number;
  name: string;
  code: string;
  stock: number;
  color: string;
  type: string;
  category: string;
  image: string;
}

const ProductPage: React.FC = () => {
  const [categories] = useState(['Groom\'s Section', 'Eastern', 'Western']);
  //const [selectedCategory, setSelectedCategory] = useState<string>('');
  // const [productTypes, setProductTypes] = useState<ProductTypes>({
  //   "Groom's Section": ['Sherwani', 'Prince Coat', 'Fancy Waist Coat'],
  //   'Eastern': ['Formal Waist Coat', 'Shalwar Suit', 'Kurta'],
  //   'Western': ['Formal Suiting', 'Stylish Tuxedo', 'Traditional Mix and Match'],
  // });

  const [productTypes] = useState<ProductTypes>({
    "Groom's Section": ['Sherwani', 'Prince Coat', 'Fancy Waist Coat'],
    'Eastern': ['Formal Waist Coat', 'Shalwar Suit', 'Kurta'],
    'Western': ['Formal Suiting', 'Stylish Tuxedo', 'Traditional Mix and Match'],
  });

  const initialProducts: Product[] = [
    { id: 1, name: 'Product A', code: 'P001', stock: 10, color: 'Blue', type: 'Sherwani', category: "Groom's Section", image: 'https://amiradnan.com/cdn/shop/products/FG-0001880-0644201-Silver-5.jpg?v=1664260476'},
    { id: 2, name: 'Product B', code: 'P002', stock: 15, color: 'Red', type: 'Sherwani', category: "Groom's Section", image: 'https://i.pinimg.com/564x/e2/31/ae/e231aebc2ad63a5d2010497c6041ded9.jpg' },
    { id: 11, name: 'Product AA', code: 'P0011', stock: 10, color: 'Blue', type: 'Sherwani', category: "Groom's Section", image: 'https://i.pinimg.com/564x/1a/72/12/1a7212c3e0a49e67e1dc5ad64c9f2b04.jpg' },
    { id: 22, name: 'Product BB', code: 'P0022', stock: 15, color: 'Red', type: 'Sherwani', category: "Groom's Section", image: 'https://amiradnan.com/cdn/shop/products/FG-0001880-0644201-Silver-5.jpg?v=1664260476' },

    { id: 3, name: 'Product C', code: 'P003', stock: 12, color: 'Pink', type: 'Prince Coat', category: "Groom's Section", image: 'productc.jpg' },
    { id: 4, name: 'Product D', code: 'P004', stock: 16, color: 'Brown', type: 'Prince Coat', category: "Groom's Section", image: 'productd.jpg' },

    { id: 5, name: 'Product E', code: 'P005', stock: 23, color: 'Pink', type: 'Fancy Waist Coat', category: "Groom's Section", image: 'producte.jpg' },
    { id: 6, name: 'Product F', code: 'P006', stock: 7, color: 'Violet', type: 'Fancy Waist Coat', category: "Groom's Section", image: 'productf.jpg' },


    { id: 7, name: 'Product G', code: 'P007', stock: 18, color: 'Green', type: 'Formal Waist Coat', category: 'Eastern', image: 'productg.jpg' },
    { id: 8, name: 'Product H', code: 'P008', stock: 42, color: 'Black', type: 'Formal Waist Coat', category: 'Eastern', image: 'producth.jpg' },

    { id: 9, name: 'Product I', code: 'P009', stock: 19, color: 'Orange', type: 'Shalwar Suit', category: 'Eastern', image: 'producti.jpg' },
    { id: 10, name: 'Product J', code: 'P0010', stock: 22, color: 'Blue', type: 'Shalwar Suit', category: 'Eastern', image: 'productj.jpg' },

    { id: 11, name: 'Product K', code: 'P0011', stock: 13, color: 'Brown', type: 'Kurta', category: 'Eastern', image: 'productk.jpg' },
    { id: 12, name: 'Product L', code: 'P0012', stock: 25, color: 'Indingo', type: 'Kurta', category: 'Eastern', image: 'productl.jpg' },


    { id: 13, name: 'Product M', code: 'P0013', stock: 18, color: 'Green', type: 'Formal Suiting', category: 'Western', image: 'productm.jpg' },
    { id: 14, name: 'Product N', code: 'P0014', stock: 42, color: 'Black', type: 'Formal Suiting', category: 'Western', image: 'productn.jpg' },

    { id: 15, name: 'Product O', code: 'P0015', stock: 19, color: 'Orange', type: 'Stylish Tuxedo', category: 'Western', image: 'producto.jpg' },
    { id: 16, name: 'Product P', code: 'P0016', stock: 22, color: 'Blue', type: 'Stylish Tuxedo', category: 'Western', image: 'productp.jpg' },

    { id: 17, name: 'Product Q', code: 'P0017', stock: 13, color: 'Brown', type: 'Traditional Mix and Match', category: 'Western', image: 'productq.jpg' },
    { id: 18, name: 'Product R', code: 'P0018', stock: 25, color: 'Indingo', type: 'Traditional Mix and Match', category: 'Western', image: 'productr.jpg' },
    // Add more sample product data here
  ];
  //const [products, setProducts] = useState(initialProducts);
  const [products] = useState(initialProducts);

  //const handleTypeClick = (type: String) => {
  //  const filteredProducts = initialProducts.filter(product => product.type === type);
    //setProducts(filteredProducts);
  //};

  // const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedCategory(event.target.value);
  // };

  return (
    <div className="py-16">
      {categories.map(category => (
        <div key={category}>
          <h2 className="mb-2 text-2xl font-semibold text-center underline" style={{ textTransform: 'uppercase' }}>{category}</h2>
          {/* <div className="mb-4">
            <h2 className="mb-2 text-xl font-semibold">Product Types</h2>
            <ul>
              {productTypes[category].map(type => (
                <li key={type} className="text-green-500 cursor-pointer" onClick={() => handleTypeClick(type)}>
                  {type}
                </li>
              ))}
            </ul>
          </div> */}
          {productTypes[category].map(type => (
            <div key={type}>
              <h2 className="mb-2 text-lg font-semibold">{type}</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {products.filter(product => product.category === category && product.type === type).map((product, index) => (
                  // <Link to={`/products/${product.id}`} key={index}>
                  //   <div key={index} className="p-4 mb-4 border border-gray-300 rounded">
                  //     {/* <img src={product.image} alt={product.name} className="object-cover w-32 h-32 mb-2" /> */}
                  //     <h3 className="text-lg font-semibold">{product.name}</h3>
                  //     <p>Product Code: {product.code}</p>
                  //     <p>Available Stock: {product.stock}</p>
                  //     <p>Color: {product.color}</p>
                  //     <p>Type: {product.type}</p>
                  //     <p>Category: {product.category}</p>
                  //   </div>
                  // </Link>
                  <ProductsCard key={product.id} {...product} />
                ))}
              </div>
            </div>

          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductPage;