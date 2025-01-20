import { sanityFetch } from "@/sanity/lib/live";
import { allfoods } from "@/sanity/lib/queries";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

type Item = {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  imageUrl: string;
  description: string;
  available: boolean;
};

type MenuCardProps = {
  item: Item;
  onAddToCart: (item: Item) => void;
};


export default async function MenuItemCards() {
  const response = await sanityFetch({ query: allfoods });
  const foods: Item[] =
    response.data?.map((item: any) => ({
      _id: item._id,
      name: item.name,
      category: item.category,
      originalPrice: item.originalPrice,
      price: item.price,
      tags: item.tags || [],
      imageUrl: item.imageUrl,
      description: item.description,
      available: item.available,
    })) || [];

  const handleAddToCart = (item: Item) => {
    console.log("Added to cart:", item);
    // Implement add-to-cart logic
  };

  return (
    <main className="bg-white">
      <header
        className="bg-cover bg-center h-52 flex flex-col text-center"
        style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}
      >
        <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-wide mt-16">
          Our Food Menu
        </h1>
        <div className="flex items-center justify-center text-sm lg:text-2xl">
          <h1 className="text-white">Home</h1>
          <MdKeyboardArrowRight className="text-white" />
          <h1 className="text-[#ff9f0d]">
            <u>Our Food Menu</u>
          </h1>
        </div>
      </header>

      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((item) => (
            <MenuCard key={item._id} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </main>
  );
}


const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm flex flex-col items-center transition-transform transform hover:scale-105">
      <Image
        src={item.imageUrl}
        alt={item.name}
        width={500}
        height={500}
        className="w-60 h-60 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-center">{item.name}</h2>
      <p className="text-gray-500 text-center mb-2">{item.category}</p>
      <p className="text-lg font-bold text-center mb-2">
        ${item.price} <span className="line-through text-gray-400">${item.originalPrice}</span>
      </p>
      <p className="text-gray-500 text-center mb-2">{item.tags.join(", ")}</p>
      <p className="text-gray-500 text-center mb-2">{item.available ? "Available" : "Out of Stock"}</p>
      <p className="text-gray-500 text-center mb-2">{item.description}</p>
      <button
        onClick={() => onAddToCart(item)}
        className="bg-[#ff9f0d] text-white px-4 py-2 rounded-lg text-lg shadow-md hover:bg-orange-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

