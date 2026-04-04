import React from "react";

const clients = [
  {
    id: 1,
    name: "Google",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 2,
    name: "Amazon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 3,
    name: "Microsoft",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 4,
    name: "Shopify",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
  },
  {
    id: 5,
    name: "Slack",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  {
    id: 6,
    name: "Airbnb",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  },
];

const ClientsSection = () => {
  return (
    <section className="bg-black w-full py-24 px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="text-white text-xl">&gt;</span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
              Our Clients
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Trusted by growing businesses
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            We help companies build powerful digital foundations with websites,
            marketing, and business solutions.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-white/10">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center h-32 border border-white/10 hover:bg-white/5 transition duration-500">
              <img
                src={client.image}
                alt={client.name}
                className="max-h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
