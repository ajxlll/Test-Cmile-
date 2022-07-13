import Layout from "../components/layout";
import Link from "next/link";
import Nav from "../components/navbar";

export default function Home() {
  return (
    <><>
      <Nav />
      <div className="bg-gray-100 text-white">
        <div className="bg-emerald-500">
          <div className="max-w-screen-lg mx-auto px-3 py-6">
            <div className="flex flex-wrap justify-between items-center">
              <div className=""></div>
            </div>
          </div>
          <div className="max-w-screen-lg mx-auto px-3 pt-20 pb-28">
            <header className="text-center h-96">
              <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
                Crypto Miler
              </h1>
              <br />
              <div className="text-2xl text-blue-100 mt-4 mb-10">
                Some stuff about Crypto Miler
              </div>
              <button 
              class="transition p-2 ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-lg">
                WHITEPAPER
              </button>
            </header>
          </div>
        </div>

        <div className="mx-auto mt-60 py-24 bg-gray-100">
          <div className="grid gap-4 place-content-center">

            <section>
              <a id="what"></a>
              <div className="mt-28 flex flex-wrap items-center">
                <div className="w-full sm:w-1/2 text-center px-6">
                  <h1 className="mt-44 text-4xl text-black"> "What is Crypto Miller?" Section</h1>
                  <div className="relative flex flex-col max-w-lg break-words bg-gradient-to-l from-sky-500 to-indigo-500 w-full mb-8 mt-8 shadow-2xl rounded-lg">
                    <h3 className="text-3xl pt-6 text-white font-extrabold">
                      Lorem Ipsum
                    </h3>
                    <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse bibendum, nunc non posuere consectetur, justo
                      erat semper enim, non hendrerit dui odio id enim.
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-6 pl-auto "></div>
              </div>
            </section>

            <section>
              <a id="roadmap"></a>
              <div className="mt-20 flex flex-wrap items-center flex-row-reverse">
                <div className="w-full sm:w-1/2 text-center px-6">
                  <h1 className="mt-44 text-4xl text-black"> roadmap section</h1>
                  <div className="relative flex flex-col max-w-lg break-words bg-gradient-to-r from-sky-500 to-indigo-500 w-full mb-8 shadow-2xl rounded-lg">
                    <h3 className="text-3xl pt-6 text-white font-extrabold">
                      Lorem Ipsum
                    </h3>
                    <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse bibendum, nunc non posuere consectetur, justo
                      erat semper enim, non hendrerit dui odio id enim.
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-6"></div>
              </div>
            </section>

            <section>
              <a id="nft"></a>
              <div className="mt-20 flex flex-wrap items-center">
                <div className="w-full sm:w-1/2 text-center px-6">
                  <h1 className="mt-44 text-4xl text-black"> NFT section</h1>
              <Link href="https://gateway.ipfscdn.io/ipfs/QmZ7JB3mBYxTD8McJZK8QrVAY7i9JrL3Tqu14GVaYYqnQh/marketplace.html?contract=0x622841B23F77b17E61d59f1F5cD7c69809EC89f7&chainId=80001&listingId=0">
              <button 
              class="mb-12 transition p-2 ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-lg">
              MARKETPLACE
              </button>
              </Link>

                  <div className="relative flex flex-col max-w-lg break-words bg-gradient-to-l from-sky-500 to-indigo-500  w-full mb-8 shadow-2xl rounded-lg">
                    <h3 className="text-3xl text-white pt-6 font-extrabold">
                      Lorem Ipsum
                    </h3> 
                    <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse bibendum, nunc non posuere consectetur, justo
                      erat semper enim, non hendrerit dui odio id enim.
                    </div>

                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-6 mb-8"></div>
              </div>
            </section>

            <section>
              <a id="defi"></a>
              <div className="mt-20 flex flex-wrap items-center">
                <div className="w-full sm:w-1/2 text-center px-6">
                  <h1 className="mt-44 text-4xl text-black"> DeFi section</h1>
                  <div className="relative flex flex-col max-w-lg break-words bg-gradient-to-l from-sky-500 to-indigo-500  w-full mb-8 shadow-2xl rounded-lg">
                    <h3 className="text-3xl text-white pt-6 font-extrabold">
                      Lorem Ipsum
                    </h3>
                    <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse bibendum, nunc non posuere consectetur, justo
                      erat semper enim, non hendrerit dui odio id enim.
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-6 mb-8"></div>
              </div>
            </section>

            <section>
              <a id="team"></a>
              <div className="mt-20 flex flex-wrap items-center">
                <div className="w-full sm:w-1/2 text-center px-6">
                  <h1 className="mt-44 text-4xl text-black"> Team section</h1>
                  <div className="relative flex flex-col max-w-lg break-words bg-gradient-to-l from-sky-500 to-indigo-500  w-full mb-8 shadow-2xl rounded-lg">
                    <h3 className="text-3xl text-white pt-6 font-extrabold">
                      Lorem Ipsum
                    </h3>
                    <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse bibendum, nunc non posuere consectetur, justo
                      erat semper enim, non hendrerit dui odio id enim.
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-6 mb-8"></div>
              </div>
            </section>

            <section>
              <a id="contact"></a>
              <div className="mt-20 flex flex-wrap items-center">
                <div className="w-full sm:w-1/2 text-center px-6">
                  <h1 className="mt-44 text-4xl text-black">Contact section</h1>
                  <div className="relative flex flex-col max-w-lg break-words bg-gradient-to-l from-sky-500 to-indigo-500  w-full mb-8 shadow-2xl rounded-lg">
                    <h3 className="text-3xl text-white pt-6 font-extrabold">
                      Lorem Ipsum
                    </h3>
                    <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse bibendum, nunc non posuere consectetur, justo
                      erat semper enim, non hendrerit dui odio id enim.
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-6 mb-8"></div>
              </div>
            </section>

          </div>
          <div className="max-w-screen-lg mx-auto px-3 py-12">
            <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-gray-100 rounded-md"></div>
          </div>
        </div>

        <div className="bg-emerald-500 mt-72">
          <div className="max-w-screen-lg mx-auto px-3 py-16">
            <div className="text-center">
              <span className="text-gray-900 inline-flex items-center font-semibold text-xl">
                Crypto Miler
              </span>
              <div className="mt-8 text-sm">
                <div className="footer-copyright">
                  ©2022 Crypto Miler. All rights reserved
                  <p className="text-xs">
                    Developed with
                    <span role="img" aria-label="Love" className="text-sm">
                      {" "}
                      ♥{" "}
                    </span>
                    by{" "}
                    <Link href="https://marcoagarcia.com">Marco A. Garcia</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
    </>
  );
}
