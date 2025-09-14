// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     appType: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.message || !formData.appType) {
//       setStatus("⚠️ Please fill all fields.");
//       return;
//     }

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setStatus("✅ Message sent!");
//         setFormData({ name: "", email: "", message: "", appType: "" }); // clear after success
//       } else {
//         setStatus("❌ Error sending message.");
//       }
//     } catch (err) {
//       setStatus("❌ Something went wrong.");
//     }
//   };

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       className="space-y-4"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <input
//         type="text"
//         name="name"
//         autoComplete="off"
//         placeholder="Name"
//         value={formData.name}
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         className="w-full p-2 border rounded focus:outline-none focus:border-primary transition-colors"
//         required
//       />

//       <input
//         type="email"
//         name="email"
//         autoComplete="off"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         className="w-full p-2 border rounded focus:outline-none focus:border-primary transition-colors"
//         required
//       />

//       <select
//         name="appType"
//         value={formData.appType}
//         onChange={(e) => setFormData({ ...formData, appType: e.target.value })}
//         className="w-full p-2 border rounded focus:outline-none focus:border-primary transition-colors"
//         required
//       >
//         <option value="">Select App</option>
//         <option value="Serwex">Serwex (Users)</option>
//         <option value="Serwex Partner">Serwex Partner (Vendors)</option>
//       </select>

//       <textarea
//         name="message"
//         autoComplete="off"
//         placeholder="Message"
//         value={formData.message}
//         onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//         className="w-full p-2 border rounded h-32 focus:outline-none focus:border-primary transition-colors"
//         required
//       />

//       <button
//         type="submit"
//         className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition-colors shadow-soft"
//       >
//         Send
//       </button>

//       {status && <p className="text-accent">{status}</p>}
//     </motion.form>
//   );
// };

// export default ContactForm;

"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, MessageSquare, Smartphone } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    appType: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.appType) {
      newErrors.appType = "Please select an app";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) {
      setStatus("Please correct the errors above");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", appType: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const StatusMessage = () => {
    if (status === "success") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-3 text-green-700 bg-green-50 p-4 rounded-xl border border-green-200"
        >
          <CheckCircle className="w-6 h-6 text-green-600" />
          <div>
            <p className="font-semibold">Message sent successfully!</p>
            <p className="text-sm text-green-600">We'll get back to you soon.</p>
          </div>
        </motion.div>
      );
    }

    if (status === "error") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-3 text-red-700 bg-red-50 p-4 rounded-xl border border-red-200"
        >
          <AlertCircle className="w-6 h-6 text-red-600" />
          <div>
            <p className="font-semibold">Something went wrong</p>
            <p className="text-sm text-red-600">Please try again later.</p>
          </div>
        </motion.div>
      );
    }

    if (status && status !== "success" && status !== "error") {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-3 text-amber-700 bg-amber-50 p-4 rounded-xl border border-amber-200"
        >
          <AlertCircle className="w-6 h-6 text-amber-600" />
          <span className="font-medium">{status}</span>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div className="max-w-3xl mx-auto p-6" ref={formRef}>
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-yellow-50/30 to-orange-100/20 rounded-3xl blur-3xl -z-10" />

      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-100 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="text-white/90 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            We'd love to hear from you. Send us a message!
          </motion.p>
        </div>

        {/* Form */}
        <div className="p-8">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none bg-gray-50 focus:bg-white ${
                    errors.name
                      ? "border-red-300 focus:border-red-500"
                      : focusedField === "name"
                      ? "border-amber-400 shadow-lg shadow-amber-400/20"
                      : "border-gray-200 focus:border-amber-400 hover:border-gray-300"
                  }`}
                  disabled={isLoading}
                />
              </div>
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-500 text-sm flex items-center space-x-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.name}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none bg-gray-50 focus:bg-white ${
                    errors.email
                      ? "border-red-300 focus:border-red-500"
                      : focusedField === "email"
                      ? "border-amber-400 shadow-lg shadow-amber-400/20"
                      : "border-gray-200 focus:border-amber-400 hover:border-gray-300"
                  }`}
                  disabled={isLoading}
                />
              </div>
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-500 text-sm flex items-center space-x-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.email}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* App Type Field */}
            <div className="space-y-2">
              <label htmlFor="appType" className="block text-sm font-semibold text-gray-700">
                Which App? *
              </label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                <select
                  id="appType"
                  value={formData.appType}
                  onChange={(e) => handleInputChange("appType", e.target.value)}
                  onFocus={() => setFocusedField("appType")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none bg-gray-50 focus:bg-white appearance-none ${
                    errors.appType
                      ? "border-red-300 focus:border-red-500"
                      : focusedField === "appType"
                      ? "border-amber-400 shadow-lg shadow-amber-400/20"
                      : "border-gray-200 focus:border-amber-400 hover:border-gray-300"
                  }`}
                  disabled={isLoading}
                >
                  <option value="">Select an app</option>
                  <option value="Serwex">Serwex (For Users)</option>
                  <option value="Serwex Partner">Serwex Partner (For Vendors)</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {errors.appType && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-500 text-sm flex items-center space-x-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.appType}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Message *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-amber-400 w-5 h-5" />
                <textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none bg-gray-50 focus:bg-white resize-none ${
                    errors.message
                      ? "border-red-300 focus:border-red-500"
                      : focusedField === "message"
                      ? "border-amber-400 shadow-lg shadow-amber-400/20"
                      : "border-gray-200 focus:border-amber-400 hover:border-gray-300"
                  }`}
                  disabled={isLoading}
                />
              </div>
              <div className="flex justify-between">
                <AnimatePresence>
                  {errors.message ? (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-red-500 text-sm flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.message}</span>
                    </motion.p>
                  ) : (
                    <div></div>
                  )}
                </AnimatePresence>
                
                <span className={`text-sm ${
                  formData.message.length > 400 ? 'text-red-500' : 'text-gray-500'
                }`}>
                  {formData.message.length}/500
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              whileHover={!isLoading ? { scale: 1.02, y: -1 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>

            {/* Status Message */}
            <StatusMessage />
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;