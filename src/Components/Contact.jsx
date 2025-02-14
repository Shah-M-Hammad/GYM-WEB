import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";

export default function Example() {
  const [agreed, setAgreed] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [agree, setAgree] = useState(false)


  let change = (evt) => {
    let fieldName = evt.target.name;
    let value = evt.target.value;

    setAgreed((curr) => {
      return { ...curr, [fieldName]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(agreed);
    setAgreed({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contacts" className="isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          // className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center ">
        <h2 className="text-3xl font-bold tracking-tight text-red-600  sm:text-4xl">
          CONTACT US
        </h2>
        <p className="mt-2 text-lg leading-8 text-white">LET'S CONNECT</p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-red-600 "
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
        value={agreed.firstName}

                onChange={change}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-red-600  sm:text-sm sm:leading-6 bg-gray-300"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-red-600 "
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastName"
                type="text"
        value={agreed.lastName}

                autoComplete="family-name"
                onChange={change}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-red-700 focus:ring-2 focus:ring-inset focus:ring-red-600  sm:text-sm sm:leading-6 bg-gray-300 "
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-red-600 "
            >
              Your Phone
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="phone"
        value={agreed.phone}

                type="text"
                autoComplete="organization"
                onChange={change}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-red-700 focus:ring-2 focus:ring-inset focus:ring-red-600  sm:text-sm sm:leading-6 bg-gray-300"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-red-600 "
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
        value={agreed.email}

                onChange={change}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-red-700 focus:ring-2 focus:ring-inset focus:ring-red-600  sm:text-sm sm:leading-6 bg-gray-300"
              />
            </div>
          </div>
          {/* <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-red-600 ">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text- focus:ring-2 focus:ring-inset focus:text-red-600  sm:text-sm"
  
  
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text"
                />
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-red-600  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-red-700 focus:ring-2 focus:ring-inset focus:text-red-600  sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-red-600 "
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                onChange={change}
                rows={4}
        value={agreed.message}

                className="block w-full rounded-md border-0 px-3.5 py-2 text-black  shadow-sm ring-1 ring-inset placeholder:text-red-700 focus:ring-2 focus:ring-inset focus:ring-red-600  sm:text-sm sm:leading-6 bg-gray-300"
                // defaultValue={""}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              {/* <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="h-4 w-4 transform rounded-full bg-red-500 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch> */}

<Switch
      checked={agree || false} // Ensure 'agreed' is always a boolean
      onChange={setAgree}
      className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
    >
      <span className="sr-only">Agree to policies</span>
      <span
        aria-hidden="true"
        className="h-4 w-4 transform rounded-full bg-red-500 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
      />
    </Switch>
            </div>
            <Label className="text-sm leading-6 text-white">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-red-500">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            // onClick={() => console.log('Button clicked')}
            className="block w-full rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
