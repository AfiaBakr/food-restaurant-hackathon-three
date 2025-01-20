import { sanityFetch } from "@/sanity/lib/live";
import { allchefs } from "@/sanity/lib/queries";
import Image from "next/image";

type Chefs = {
    _id: string;
    name: string;
    position: string;
    experience: number;
    specialty: string;
    imageUrl: string;
    description: string;
    available: boolean;
}

export default async function ChefCards() {
  // Fetch data and ensure it's mapped to the expected structure
  const response = await sanityFetch({ query: allchefs });
  const chef: Chefs[] = response.data?.map((chefname: any) => ({
    _id: chefname._id,
    name: chefname.name,
    position: chefname.positon, 
    experience: chefname.experience,
    specialty: chefname.specialty,
    imageUrl: chefname.imageUrl,
    description: chefname.description,
    available : chefname.available,
    
  })) || [];

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chef.map((ourchefs) => (
          <div
            key={ourchefs._id}
            className="border border-gray-300 p-4 rounded-lg shadow-sm flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <Image
              src={ourchefs.imageUrl}
              alt={ourchefs.name}
              width={500}
              height={500}
              className="w-60 h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-center">{ourchefs.name}</h2>
            <p className="text-gray-500 text-center mb-2">{ourchefs.position}</p>
            <p className="text-lg font-bold text-center">{ourchefs.experience}</p>
            <p className="text-lg font-bold text-center">{ourchefs.specialty}</p>
            <p className="text-lg font-bold text-center">{ourchefs.description}</p>
            <p className="text-lg font-bold text-center">{ourchefs.available}</p>
          </div>
        ))}
      </div>
    </div>
  );
}