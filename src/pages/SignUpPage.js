import React, { useState } from "react";

export const SignUpPage = () => {
  const handleNavigation = () => {
    // Navigation logic would go here
    console.log("Navigating to dashboard or login");
  };

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "Yes",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[\d\s\-)]{10,}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

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

  const handleSubmit = () => {
    if (validateForm()) {
      // Here you would typically make an API call
      console.log("Form submitted:", formData);
      handleNavigation();
    }
  };

  const isFormValid =
    formData.fullName &&
    formData.phoneNumber &&
    formData.email &&
    formData.password &&
    Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen bg-[#F7F8F9] flex flex-col">
      {/* Header Section */}
      <div className="pt-10 px-5 lg:pt-20 lg:text-center">
        <h1 className="text-[28px] font-medium leading-[36px] text-[#1D2226] font-[Rubik] mb-4">
          Create your PopX account
        </h1>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-start justify-center pt-8 px-5">
        <div className="w-full max-w-[335px] space-y-6">
          {/* Full Name Field */}
          <div className="relative">
            <label
              htmlFor="fullName"
              className="absolute -top-2 left-3 px-1 text-[13px] text-[#6C25FF] bg-[#F7F8F9] z-10">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className={`w-full border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 bg-[#F7F8F9] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-transparent transition-all ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Phone Number Field */}
          <div className="relative">
            <label
              htmlFor="phoneNumber"
              className="absolute -top-2 left-3 px-1 text-[13px] text-[#6C25FF] bg-[#F7F8F9] z-10">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="+91 988888 888"
              className={`w-full border rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 bg-[#F7F8F9] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-transparent transition-all ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.phoneNumber}
              </p>
            )}
          </div>

          {/* Email Address Field */}
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 px-1 text-[13px] text-[#6C25FF] bg-[#F7F8F9] z-10">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email@example.com"
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
              Password<span className="text-red-500">*</span>
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

          {/* Company Name Field */}
          <div className="relative">
            <label
              htmlFor="companyName"
              className="absolute -top-2 left-3 px-1 text-[13px] text-[#6C25FF] bg-[#F7F8F9] z-10">
              Company name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Enter company name"
              className="w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm text-gray-700 bg-[#F7F8F9] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-transparent transition-all"
            />
          </div>

          {/* Agency Radio Buttons */}
          <div className="space-y-3">
            <p className="text-[13px] text-[#1D2226] font-medium">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="Yes"
                  checked={formData.isAgency === "Yes"}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.isAgency === "Yes"
                      ? "border-[#6C25FF] bg-[#6C25FF]"
                      : "border-gray-300"
                  }`}>
                  {formData.isAgency === "Yes" && (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="ml-2 text-sm text-[#1D2226]">Yes</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="No"
                  checked={formData.isAgency === "No"}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.isAgency === "No"
                      ? "border-[#6C25FF] bg-[#6C25FF]"
                      : "border-gray-300"
                  }`}>
                  {formData.isAgency === "No" && (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="ml-2 text-sm text-[#1D2226]">No</span>
              </label>
            </div>
          </div>

          {/* Create Account Button */}
          <div className="pt-8">
            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`w-full h-[46px] rounded-[6px] font-medium text-[16px] leading-[17px] text-white font-[Rubik] transition-all duration-200 ${
                isFormValid
                  ? "bg-[#6C25FF] hover:bg-[#5A1FE6] active:bg-[#4A1BC4] cursor-pointer"
                  : "bg-[#CBCBCB] cursor-not-allowed"
              }`}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
