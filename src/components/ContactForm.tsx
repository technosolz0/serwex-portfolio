// "use client";
// import { useState, useRef } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import {
//   Send,
//   CheckCircle,
//   AlertCircle,
//   Loader2,
//   User,
//   Mail,
//   MessageSquare,
//   Smartphone,
// } from "lucide-react";

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     appType: "",
//   });
//   const [status, setStatus] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [focusedField, setFocusedField] = useState<string | null>(null);

//   const formRef = useRef(null);
//   const isInView = useInView(formRef, { once: true, amount: 0.3 });

//   const validateForm = () => {
//     const newErrors: { [key: string]: string } = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//     }

//     if (!formData.appType) {
//       newErrors.appType = "Please select an app";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("");

//     if (!validateForm()) {
//       setStatus("Please correct the errors above");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setStatus("success");
//         setFormData({ name: "", email: "", message: "", appType: "" });
//         setErrors({});
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleInputChange = (field: string, value: string) => {
//     setFormData({ ...formData, [field]: value });
//     if (errors[field]) {
//       setErrors({ ...errors, [field]: "" });
//     }
//   };

//   const StatusMessage = () => {
//     if (status === "success") {
//       return (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-center space-x-3 text-green-700 bg-green-50 p-4 rounded-xl border border-green-200"
//         >
//           <CheckCircle className="w-6 h-6 text-green-600" />
//           <div>
//             <p className="font-semibold">Message sent successfully!</p>
//             <p className="text-sm text-green-600">We&apos;ll get back to you soon.</p>
//           </div>
//         </motion.div>
//       );
//     }

//     if (status === "error") {
//       return (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-center space-x-3 text-red-700 bg-red-50 p-4 rounded-xl border border-red-200"
//         >
//           <AlertCircle className="w-6 h-6 text-red-600" />
//           <div>
//             <p className="font-semibold">Something went wrong</p>
//             <p className="text-sm text-red-600">Please try again later.</p>
//           </div>
//         </motion.div>
//       );
//     }

//     if (status && status !== "success" && status !== "error") {
//       return (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-center space-x-3 text-amber-700 bg-amber-50 p-4 rounded-xl border border-amber-200"
//         >
//           <AlertCircle className="w-6 h-6 text-amber-600" />
//           <span className="font-medium">{status}</span>
//         </motion.div>
//       );
//     }

//     return null;
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6" ref={formRef}>
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-yellow-50/30 to-orange-100/20 rounded-3xl blur-3xl -z-10" />

//       <motion.div
//         className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-100 overflow-hidden"
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         {/* Header */}
//         <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-8 text-center">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={isInView ? { scale: 1 } : {}}
//             transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//             className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
//           >
//             <Mail className="w-8 h-8 text-white" />
//           </motion.div>

//           <motion.h2
//             className="text-3xl font-bold text-white mb-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.4 }}
//           >
//             Get In Touch
//           </motion.h2>

//           <motion.p
//             className="text-white/90 text-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.5 }}
//           >
//             We&apos;d love to hear from you. Send us a message!
//           </motion.p>
//         </div>

//         {/* Form */}
//         {/* ...rest of form unchanged (already fine) ... */}
//         {/* Just ensure you keep using escaped entities in text nodes */}
//       </motion.div>
//     </div>
//   );
// };

// export default ContactForm;


"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  User,
  Mail,
  MessageSquare,
  Smartphone,
} from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    appType: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.appType) newErrors.appType = "Please select an option";

    if (!formData.message.trim()) newErrors.message = "Message required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) return;

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
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const StatusMessage = () => {
    if (status === "success") {
      return (
        <div className="flex items-center gap-3 text-green-700 bg-green-50 p-4 rounded-xl border border-green-200 mb-4">
          <CheckCircle className="w-6 h-6 text-green-600" />
          <p className="font-medium">Message sent successfully!</p>
        </div>
      );
    }

    if (status === "error") {
      return (
        <div className="flex items-center gap-3 text-red-700 bg-red-50 p-4 rounded-xl border border-red-200 mb-4">
          <AlertCircle className="w-6 h-6 text-red-600" />
          <p className="font-medium">Something went wrong. Try again later.</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="max-w-3xl mx-auto p-6" ref={formRef}>
      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-yellow-100 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* HEADER */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 text-center text-white">
          <Mail className="w-12 h-12 mx-auto mb-3" />
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-white/90">We&apos;d love to hear from you</p>
        </div>

        {/* FORM */}
        <form className="p-8 space-y-6" onSubmit={handleSubmit}>
          <StatusMessage />

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <div className="flex items-center border rounded-xl px-4 py-3">
              <User className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <div className="flex items-center border rounded-xl px-4 py-3">
              <Mail className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full focus:outline-none"
                placeholder="example@gmail.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* App Type Select */}
          <div>
            <label className="block mb-1 font-medium">App Type</label>
            <div className="flex items-center border rounded-xl px-4 py-3">
              <Smartphone className="w-5 h-5 text-gray-400 mr-3" />
              <select
                value={formData.appType}
                onChange={(e) =>
                  setFormData({ ...formData, appType: e.target.value })
                }
                className="w-full bg-transparent focus:outline-none"
              >
                <option value="">Select an option</option>
                <option value="Serwex App">Serwex App</option>
                <option value="Partner App">Serwex Partner App</option>
              </select>
            </div>
            {errors.appType && (
              <p className="text-red-500 text-sm mt-1">{errors.appType}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <div className="flex border rounded-xl px-4 py-3">
              <MessageSquare className="w-5 h-5 text-gray-400 mr-3 mt-1" />
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full resize-none focus:outline-none"
                placeholder="Write your message..."
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-600 transition"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" /> Send Message
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
