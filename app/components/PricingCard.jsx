import { AiFillCheckCircle } from "react-icons/ai";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";



function PricingCard({ price }) {
 const router = useRouter();
 console.log(price)
  const dynamicDescription = (price) => {
    if (price.nickname === "20-Yard Dumpster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
           <h2 className="text-sm text-gray-500">Driveway Protection</h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">
              Neighborhood & HOA Friendly
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">
              Eco-Friendly Waste Management
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
             <h2 className="text-sm text-gray-500">$25 per day after 3 days</h2>
          </div>
          <div className="border" />
        </div>
      );
    } else if (price.nickname === "15-Yard Dumpster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
             <p className="text-sm text-gray-500">Driveway Protection</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">Neighborhood & HOA Friendly</h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">
              Eco-Friendly Waste Management
            </p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">$25 per day after 3 days</p>
           
          </div>
          <div className="border" />
        </div>
      );
    } else if (price.nickname === "10-Yard Dumpster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
           <p className="text-sm text-gray-500">Driveway Protection</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Neighborhood & HOA Friendly</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">
              Eco-Friendly Waste Management
            </p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
             <p className="text-sm text-gray-500">$25 per day after 3 days</p>
            
          </div>
          <div className="border" />
        </div>
      );
    } else if (price.nickname === "24-Hour Special: 15-Yard Dumpster") {
      return (
        <div className="mt-6 space-y-4">
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-gray-500">Driveway Protection</h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">Neighborhood & HOA Friendly</p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">
              Eco-Friendly Waste Management
            </p>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-green-500 ml-2"
              aria-hidden="true"
            />
            <p className="text-sm text-gray-500">$25 per day after 3 days</p>
            
          </div>
          <div className="border" />
        </div>
      );
    }
  };

  const dynamicSubTitle = (price) => {
    if (price.nickname === "20-Yard Dumpster") {
      return (<div><h2 className="text-[#f1592a] mt-1">3-day rental</h2></div>);
    } else if (price.nickname === "15-Yard Dumpster") {
      return (<div><h2 className="text-[#f1592a] mt-1">3-day rental</h2></div>);
    } else if (price.nickname === "10-Yard Dumpster") {
      return (<div><h2 className="text-[#f1592a] mt-1">Weekend Special</h2></div>);
    } 
  };


  return (
    <div className="border-gray-100 shadow-2xl border-4 text-center mt-10 max-w-[1040px]">
      <div>
        <div className="bg-gray-100 h-28 items-center font-bold">
          <h4 className="text-3xl">{price.nickname}</h4>
          <p>{dynamicSubTitle(price)}</p>
          <h3 className="text-xl mt-2">First 2,000lbs Included</h3>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center pt-4">
            <h1 className="text-5xl font-bold">
              {(price.unit_amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
            </h1>
            <h3 className="pl-1 mt-2">Additional weight just $.05 /lb</h3>
          </div>
          <ul className="flex justify-center">
            <li className="text-xl font-bold">{dynamicDescription(price)}</li>
          </ul>
          {/* <Link href="/calendar"> */}
          <Link href={{
            pathname: '/calendar',
            query: {price: price.id }
          }} >
            <button
              className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-[#f1592a] hover:bg-[#f1592a]/70 sm:text-xs sm:py-1 sm:px-2 md:text-sm md:py-2 md:px-4 text-sm font-medium text-white shadow-sm"
            >
              {" "}
              Schedule Today
            </button>
            </Link>
            {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
