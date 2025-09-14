"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

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
    } catch {
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
            <p className="text-sm text-green-600">We&apos;ll get back to you soon.</p>
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
            We&apos;d love to hear from you. Send us a message!
          </motion.p>
        </div>

        {/* Form */}
        {/* ...rest of form unchanged (already fine) ... */}
        {/* Just ensure you keep using escaped entities in text nodes */}
      </motion.div>
    </div>
  );
};

export default ContactForm;
