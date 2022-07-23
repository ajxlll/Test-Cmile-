import Link from "next/link";
import Nav from "../components/navbar";
import Image from "next/image";
import Header from "../components/header";
import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  //form validation
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
      setShowValidationMessage(true);
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
      setShowValidationMessage(true);
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
      setShowValidationMessage(true);
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowValidationMessage(false);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
  };
  return (
    <>
      <div>
        <Header />
        <Nav />
        <div className="container max-w-fit mx-auto px-auto bg-gray-100">
          <main>
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
                  <button className="transition p-2 ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-lg">
                    WHITEPAPER
                  </button>
                </header>
              </div>
            </div>

            <div className="mt-60 py-24">
              <a id="what"></a>
              <section>
                <div className="mt-44">
                  <div className="flex flex-wrap flex-row justify-center">
                    <Image src="/col.png" width={500} height={500}></Image>
                    <div className="m-12 max-w-xl">
                      <p className="text-4xl text-orange-300">
                        "Why we invest in CRYPTO MILER?"
                      </p>
                      <p className="text-black font-light pt-8 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse bibendum, nunc non posuere consectetur,
                        justo erat semper enim, non hendrerit dui odio id enim.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <p className="text-black font-light pt-8 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse bibendum, nunc non posuere consectetur,
                        justo erat semper enim, non hendrerit dui odio id enim.
                        Lorem ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <a id="roadmap"></a>
              <section>
                <h1 className="mt-44 text-center text-4xl text-black">
                  Road Map
                </h1>
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2011 - present"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    /*icon={<WorkIcon />} */
                  >
                    <h3 className="vertical-timeline-element-title">
                      Creative Director
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Miami, FL
                    </h4>
                    <p>
                      Creative Direction, User Experience, Visual Design,
                      Project Management, Team Leading
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    /*icon={<WorkIcon />} */
                  >
                    <h3 className="vertical-timeline-element-title">
                      Art Director
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      San Francisco, CA
                    </h4>
                    <p>
                      Creative Direction, User Experience, Visual Design, SEO,
                      Online Marketing
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    /*icon={<WorkIcon />} */
                  >
                    <h3 className="vertical-timeline-element-title">
                      Web Designer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Los Angeles, CA
                    </h4>
                    <p>User Experience, Visual Design</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    /*icon={<WorkIcon />} */
                  >
                    <h3 className="vertical-timeline-element-title">
                      Web Designer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      San Francisco, CA
                    </h4>
                    <p>User Experience, Visual Design</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                    /*icon={<WorkIcon />} */
                  >
                    <h3 className="vertical-timeline-element-title">
                      Content Marketing for Web, Mobile and Social Media
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Online Course
                    </h4>
                    <p>Strategy, Social Media</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                    /*icon={<WorkIcon />} */
                  >
                    <h3 className="vertical-timeline-element-title">
                      Agile Development Scrum Master
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Certification
                    </h4>
                    <p>Creative Direction, User Experience, Visual Design</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                    /*icon={<WorkIcon />} */
                  >
                    <h3 className="vertical-timeline-element-title">
                      Bachelor of Science in Interactive Digital Media Visual
                      Imaging
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Bachelor Degree
                    </h4>
                    <p>Creative Direction, Visual Design</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    iconStyle={{
                      background: "rgb(16, 204, 82)",
                      color: "#fff",
                    }}
                    /*icon={<WorkIcon />} */
                  />
                </VerticalTimeline>
              </section>

              <a id="nft"></a>
              <section>
                <div className="mt-40 border-2 w-2/4 mx-auto rounded-md flex flex-wrap">
                  <div className="mx-auto text-center">
                    <h1 className="text-center mt-12 mb-6 text-4xl text-black"> NFT Marketplace</h1>
                    <p className="text-black lg:px-60 text-center font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse bibendum, nunc non posuere consectetur,
                      justo erat semper enim, non hendrerit dui odio id enim.
                    </p>
                    <p className="text-black lg:px-60 mt-12 text-center font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse bibendum, nunc non posuere consectetur,
                      justo erat semper enim, non hendrerit dui odio id enim.
                    </p>
                    <Link href="https://gateway.ipfscdn.io/ipfs/QmZ7JB3mBYxTD8McJZK8QrVAY7i9JrL3Tqu14GVaYYqnQh/marketplace.html?contract=0x622841B23F77b17E61d59f1F5cD7c69809EC89f7&chainId=80001&listingId=0">
                      <button className="mb-12 transition text-white p-2 m-2 mt-8 ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-lg">
                        MARKETPLACE
                      </button>
                    </Link>
                  </div>
                </div>
              </section>

              <section>
                <a id="defi"></a>
                <div className="mt-20 flex flex-wrap items-center flex-row-reverse">
                  <div className="w-full sm:w-1/2 text-center px-6">
                    <h1 className="mt-44 text-4xl text-black"> DeFi section</h1>
                    <div className="relative flex flex-col max-w-lg break-words bg-gradient-to-l from-sky-500 to-indigo-500  w-full mb-8 shadow-2xl rounded-lg">
                      <h3 className="text-3xl text-white pt-6 font-extrabold">
                        Lorem Ipsum
                      </h3>
                      <div className="mt-6 text-xl px-3 pb-6 font-medium text-white leading-9">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse bibendum, nunc non posuere consectetur,
                        justo erat semper enim, non hendrerit dui odio id enim.
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 p-6 mb-8"></div>
                </div>
              </section>

              <section>
                <a id="team"></a>
                <br />
                <h1 className="mt-44 text-center text-4xl font-bold pb-4 text-black">
                  Team
                </h1>
                <div className="pt-20 pb-20 flex gap-12 flex-wrap items-center w-screen justify-center  bg-emerald-500">
                  <div className="break-words bg-gradient-to-l from-sky-500 to-indigo-500 mb-8 shadow-2xl rounded-lg">
                    <Image src="/user.png" width="400" height="400"></Image>
                    <h3 className="text-3xl text-white pt-6 text-center font-extrabold">
                      A.J.
                    </h3>
                    <p className="p-2 text-center">CEO</p>
                  </div>

                  <div className="break-words bg-gradient-to-l from-sky-500 to-indigo-500 mb-8 shadow-2xl rounded-lg">
                    <Image src="/user.png" width="400" height="400"></Image>
                    <h3 className="text-3xl text-center text-white pt-6 font-extrabold">
                      M.G.
                    </h3>
                    <p className="p-2 text-center">Developer</p>
                  </div>
                </div>
              </section>
            </div>

            <a id="contact"></a>
            <div className="pt-44">
              <form onSubmit={handleSubmit}>
                <div className="rounded bg-emerald-500 mt-44 mb-0 shadow w-full flex items-center justify-center ">
                  <div className="rounded py-12 mt-24 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                      Contact
                    </p>
                    <div className="md:flex items-center mt-12">
                      <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800">
                          Name
                        </label>
                        <input
                          tabIndex={0}
                          arial-label="Input name"
                          type="name"
                          className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                          placeholder="Input name"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800">
                          Email Address
                        </label>
                        <input
                          tabIndex={0}
                          arial-label="Please input email address"
                          type="name"
                          className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                          placeholder="Please input email address"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="w-full flex flex-col mt-8">
                        <label className="text-base font-semibold leading-none text-gray-800">
                          Message
                        </label>
                        <textarea
                          tabIndex={0}
                          aria-label="leave a message"
                          role="textbox"
                          type="name"
                          className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                          defaultValue={""}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <button
                        type="submit"
                        aria-label="Submit Form"
                        className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
                      >
                        {buttonText}
                      </button>
                    </div>
                    <div className="text-left pt-3">
                      {showSuccessMessage && (
                        <p className="text-green-500 font-semibold text-sm my-2">
                          Thank you! Your Message has been delivered
                          succesfully.
                        </p>
                      )}
                      {showFailureMessage && (
                        <p className="text-red-500">
                          Oops! Something went wrong, please try again.
                        </p>
                      )}
                      {showValidationMessage && (
                        <p className="text-red-500">
                          Oops! All fields must be filled out, please try again.
                        </p>
                      )}
                    </div>
                    <span className="text-white hover:cursor-pointer ">
                      <Link href="https://t.me/cryptomiler">
                        <Image src="/telegram.png" width={80} height={80} />
                      </Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>

            <div id="footer" className="bg-emerald-500">
              <div className="max-w-screen-lg mx-auto px-3 py-6">
                <div className="text-center">
                  <div className="mt-8 text-sm">
                    <div className="footer-copyright">
                      ©2022 Crypto Miler. All rights reserved
                      <p className="text-xs">
                        Developed with
                        <span role="img" aria-label="Love" className="text-xs">
                          {" "}
                          ♥{" "}
                        </span>
                        by{" "}
                        <span className="underline cursor-pointer hover:text-blue-600">
                          <Link href="https://marcoagarcia.com">
                            Marco A. Garcia
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
