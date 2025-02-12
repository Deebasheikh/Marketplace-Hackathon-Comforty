"use client";
import { useState } from "react";

interface BillingDetails {
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

interface BillingFormProps {
  onSubmit: (details: BillingDetails) => void;
}

const BillingForm: React.FC<BillingFormProps> = ({ onSubmit }) => {
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(billingDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-semibold">Billing Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={billingDetails.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-md"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={billingDetails.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-md"
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={billingDetails.address}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-md"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={billingDetails.city}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-md"
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={billingDetails.country}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-md"
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">
        Proceed to Payment
      </button>
    </form>
  );
};

export default BillingForm;
