import React, {useState} from 'react'
import { MdVerifiedUser } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Products = () => {

  const tiresData = [
    { id: 1, brand: 'Apollo', brendImage: "Apollo", proImg: "apollo_tyre.webp",  name: 'AMAZER 4G LIFE', price: 3247, size: '145/80 R12', rating: 4, reviews: 320, warranty: '5 Year Warranty', type: 'Tubeless' },
    { id: 2, brand: 'Apollo', brendImage: "Apollo", proImg: "apollo_tyre.webp", name: 'AMAZER 4G LIFE', price: 3556, size: '145/80 R12', rating: 4, reviews: 320, warranty: '5 Year Warranty', type: 'Tubeless' },
    { id: 3, brand: 'Apollo', brendImage: "Apollo", proImg: "apollo_tyre.webp", name: 'AMAZER 4G LIFE', price: 3786, size: '155/80 R12', rating: 4, reviews: 320, warranty: '5 Year Warranty', type: 'Tubeless' },
    { id: 4, brand: 'Apollo', brendImage: "Apollo", proImg: "apollo_tyre.webp", name: 'AMAZER 4G LIFE', price: 3873, size: '155/80 R12', rating: 4, reviews: 320, warranty: '5 Year Warranty', type: 'Tubeless' },
    { id: 5, brand: 'Ceat', brendImage: "ceat", proImg: "ceat_tyres.webp", name: 'MILAZE X3', price: 2609, size: '145/80 R12', rating: 3.9, reviews: 270, warranty: '5 Year Warranty', type: 'Tubeless' },
    { id: 6, brand: 'Ceat', brendImage: "ceat", proImg: "ceat_tyres.webp", name: 'MILAZE X3', price: 2937, size: '145/80 R12', rating: 3.9, reviews: 270, warranty: '5 Year Warranty', type: 'Tubeless' },
    { id: 7, brand: 'Ceat', brendImage: "ceat", proImg: "ceat_tyres.webp", name: 'MILAZE X3', price: 3021, size: '145/80 R12', rating: 3.9, reviews: 270, warranty: '5 Year Warranty', type: 'Tubeless' },
    { id: 8, brand: 'Ceat', brendImage: "ceat", proImg: "ceat_tyres.webp", name: 'MILAZE X3', price: 3366, size: '145/80 R13', rating: 3.9, reviews: 270, warranty: '5 Year Warranty', type: 'Tubeless' },
    { id: 9, brand: 'Bridgestone', brendImage: "Bridgestone", proImg: "Bridgestone_tyre.webp", name: 'B290', price: 3247, size: '145/80 R12', rating: 4, reviews: 320, warranty: '5 Year Warranty', type: 'Tubeless' },
    { id: 10, brand: 'Bridgestone', brendImage: "Bridgestone", proImg: "Bridgestone_tyre.webp", name: 'B290', price: 3556, size: '145/80 R12', rating: 4, reviews: 320, warranty: '5 Year Warranty', type: 'Tubeless' },
    { id: 11, brand: 'Bridgestone', brendImage: "Bridgestone", proImg: "Bridgestone_tyre.webp", name: 'B290', price: 3786, size: '155/80 R12', rating: 4, reviews: 320, warranty: '5 Year Warranty', type: 'Tubeless' },
    { id: 12, brand: 'Bridgestone', brendImage: "Bridgestone", proImg: "Bridgestone_tyre.webp", name: 'B290', price: 3873, size: '155/80 R12', rating: 4, reviews: 320, warranty: '5 Year Warranty', type: 'Tubeless' },
  ];

  const [brandFilter, setBrandFilter] = useState('');
  const [visibleItems, setVisibleItems] = useState(8);

  const handleBrandFilter = (event) => {
    setBrandFilter(event.target.value);
  };

  const filteredTires = tiresData.filter((tire) =>
    brandFilter ? tire.brand === brandFilter : true
  );

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 8);
  };

  return (
    <div className="container mx-auto py-8">
      {/* Filter Section */}
      <div className="flex justify-end items-center mb-6">
        <div className="flex space-x-4">
          <select className="border border-gray-300 rounded p-2" value={brandFilter} onChange={handleBrandFilter} >
            <option value="">All Brands</option>
            <option value="Apollo">Apollo</option>
            <option value="Ceat">Ceat</option>
            <option value="Bridgestone">Bridgestone</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option value="mostPopular">Most Popular</option>
          </select>
        </div>
        {/* <a href="#" className="text-blue-500">Advanced</a> */}
      </div>

      {/* Tire Items */}
      <div className="grid grid-cols-4 gap-4">
        {filteredTires.slice(0, visibleItems).map((tire) => (
          <div key={tire.id} className="border rounded p-4 relative overflow-hidden bg-white">
            <div className="flex justify-between items-center absolute top-0 right-0 bg-[#fff1c5] px-1 py-[2px]">
              <MdVerifiedUser className='pr-[2px]' />
              <span className="text-sm text-black">{tire.warranty}</span>
            </div>
            <img src={`/images/tyres/${tire.brendImage}.png`} alt={tire.name} width="100" height="auto" className="object-contain mb-1 h-6" />
            <h3 className="font-semibold text-[14px] text-[#130F26] min-h-8 leading-4 pt-1">{tire.name}</h3>
            <p className="text-sm">{tire.size}</p>
            <div className="flex items-center mt-2">
              <span className="bg-green-600 text-white text-xs font-bold py-1 px-2 rounded">{tire.rating}</span>
              <span className="ml-2 text-gray-500 text-sm">{tire.reviews} Reviews</span>
            </div>
            <p className="text-xl font-bold mt-4">₹ {tire.price}</p>
            <p className="text-sm text-green-500">{tire.type}</p>
            <img src={`/images/products/${tire.proImg}`} alt={tire.proImg} className="absolute -bottom-[48px] -right-[60px] w-2/3" />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleItems < filteredTires.length && (
        <div className="text-center mt-8">
          <button className="px-4 py-2 rounded flex gap-1 items-center mx-auto" onClick={loadMoreItems} style={{color:"#0000008a",border:"1px solid #0000008a"}} >
            View more <RiArrowDropDownLine />
          </button>
        </div>
      )}
    </div>
  );
}

export default Products;