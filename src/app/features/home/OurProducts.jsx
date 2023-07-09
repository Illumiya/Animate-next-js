import AppStoreButton from "@/components/our-products/AppStoreButton";
import GooglePlayButton from "@/components/our-products/GooglePlayButton";
import ourProductsData from "@/data/our-products.data";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const OurProducts = () => {
  return (
    <section
      className="app-layout md:py-12 md:gap-32 w-full gap-8 py-6 my-12"
      id="our-products"
    >
    <h2 className=" mt-5 mb-5 text-5xl font-bold text-center">
        Our <br />
        Products
      </h2>
      <p className="text-secondary mb-10 text-sm text-center">
        Unlock limitless knowledge with our suite of captivating learning apps,
        <br /> revolutionising education for the digital age.
      </p>
      <div className="md:grid md:grid-cols-2 md:items-start lg:mt-32 gap-32 mt-12">
        {ourProductsData.map((product, index) => (
          <Fragment key={index}>
            <div
              className="gap-7 flex flex-col"
              style={{
                order: (index + 1) % 2 !== 0 ? `${index + 2}` : `${index + 1}`,
              }}
            >
              <h2 className="text-4xl font-bold">{product.title}</h2>
              <p className="font-base text-left">{product?.partnerShip}</p>
              <p className="font-base text-left">{product.description}</p>
              <div className="md:flex-row flex flex-col gap-6 mt-8">
                {product.googlePlayLink && (
                  <GooglePlayButton url={product.googlePlayLink} />
                )}
                {product.appStoreLink && (
                  <AppStoreButton url={product.appStoreLink} />
                )}
                {product.websiteLink && (
                  <Link
                    href={product.websiteLink}
                    target="_blank"
                    className="w-fit px-6 py-3 text-sm font-bold text-white uppercase bg-black rounded-md"
                  >
                    Go To Website
                  </Link>
                )}
              </div>
            </div>

            <div
              className={`lg:mb-0 mb-20 mt-10 lg:mt-0 ${
                (index + 1) % 2 === 0 ? "lg:ml-auto" : ""
              }`}
              style={{
                order: (index + 1) % 2 !== 0 ? `${index + 1}` : `${index + 2}`,
              }}
            >
              <Image src={product.image} alt={product.title} width={500} />
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
