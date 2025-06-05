import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/dashboard");
    console.log("Navigating to dashboard");
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically make an API call
      console.log("Form submitted:", formData);
      handleNavigation();
    }
  };

  const isFormValid =
    formData.email && formData.password && Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen bg-[#F7F8F9] flex flex-col">
      {/* Header Section */}
      <div className="pt-10 px-5 lg:pt-20 lg:text-center">
        <h1 className="text-[28px] font-medium leading-[36px] text-[#1D2226] font-[Rubik] mb-4">
          Signin to your PopX account
        </h1>
        <p className="text-[18px] leading-[26px] font-normal text-[#1D2226] opacity-60 font-[Rubik] max-w-md lg:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-start justify-center pt-8 px-5">
        <div onSubmit={handleSubmit} className="w-full max-w-[365px] space-y-6">
          {/* Email Field */}
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 px-1 text-[13px] text-[#6C25FF] bg-[#F7F8F9] z-10">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className={`w-full border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 bg-[#F7F8F9] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-transparent transition-all ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 px-1 text-[13px] text-[#6C25FF] bg-[#F7F8F9] z-10">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              className={`w-full border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 bg-[#F7F8F9] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-transparent transition-all ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full h-[46px] rounded-[6px] font-medium text-[16px] leading-[17px] text-white font-[Rubik] transition-all duration-200 ${
              isFormValid
                ? "bg-[#6C25FF] hover:bg-[#5A1FE6] active:bg-[#4A1BC4] cursor-pointer"
                : "bg-[#CBCBCB] cursor-not-allowed"
            }`}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
