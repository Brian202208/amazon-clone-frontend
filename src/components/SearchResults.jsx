import { Link, useSearchParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import{ProductDetails} from "./"
import { GB_CURRENCY } from "../utils/constants";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts]=useState(null);

  useEffect(()=>{
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");
    axios
      .get("/data/search.json")
      .then((response) => {
        const data = response.data;
        const categoryResults = data[category];
        if (searchTerm) {
          const results = categoryResults.filter((product) => {
            const newTitle = product.title.toLowerCase();
            return newTitle.includes(searchTerm.toLowerCase());
          });
          setProducts([...results]);
        } else {
          setProducts([...categoryResults]);
        }
      })
      .catch((error) => {
        console.error("Error fetching search results data:", error);
      });
  },[searchParams])

  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto pt-4">
    {
      products?.map((product,key)=>{
        return (
          <Link key={product.id} to={`product/${product.id}`}>
            <div className="h-[250px] grid grid-cols-12 rounded mt-1 mb-1 ">
              <div className="col-span-2 p-4 bg-gray-200">
              <img className="m-auto" src={product.image_small} alt={product.title}/>
              </div>
              <div className="col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100">
              <div className="font-medium text-black p-2">
              <ProductDetails product={product} ratings={true}/>
              <div className="text-xl xl:2xl pt-1">{GB_CURRENCY.format(product.price)}</div>
              </div>
              </div>
            </div>
          </Link>
        );
      })
    }
    </div>
  )
}

export default SearchResults