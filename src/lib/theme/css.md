
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Enhanced base styles for layout */
body {
  @apply bg-bg-light text-text-dark font-sans antialiased;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

main {
  flex: 1 0 auto;
  @apply pt-20; /* Matches Header.tsx height (~64px + buffer) */
}

footer {
  flex-shrink: 0;
  @apply w-full bg-gradient-accent text-white py-12;
  position: relative;
  z-index: 10;
}

/* Utility layer */
@layer utilities {
  .bg-bg-light {
    background-color: #F9FAFB; /* Matches backgroundLight */
  }

  .text-text-dark {
    color: #1F2937; /* Matches textDark */
  }

  .text-dark {
    color: #1F2937; /* Fallback, same as textDark */
  }

  .border-tertiary {
    border-color: #FFD97C; /* Matches tertiaryColor */
  }

  .bg-primary {
    background-color: #FAC94E; /* Matches primaryColor */
  }

  .bg-secondary {
    background-color: #FACC59; /* Matches secondaryColor */
  }

  .bg-accent {
    background-color: #EAB308; /* Matches accentColor */
  }

  .bg-blue-accent {
    background-color: #3B82F6; /* Tailwind blue-500 for blue accents */
  }

  .shadow-soft {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .policy-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  .policy-container h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .policy-container p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }
}

/* Base layer for prose content */
@layer base {
  .prose {
    max-width: 100%;
    @apply text-gray-800;
  }
  .prose h2 {
    @apply text-2xl font-semibold mt-8 mb-4 text-primary;
  }
  .prose p {
    @apply mb-4 leading-relaxed;
  }
  .prose li {
    @apply mb-2;
  }
  .prose a {
    @apply text-blue-accent hover:underline;
  }
}

/* CSS variables */
:root {
  --primary: #FAC94E; /* Vibrant yellow */
  --secondary: #FACC59; /* Light yellow */
  --tertiary: #FFD97C; /* Pale yellow */
  --accent: #EAB308; /* Dark yellow */
  --blue-accent: #3B82F6; /* Tailwind blue-500 */
  --blue-secondary: #2563EB; /* Tailwind blue-600 */
  --blue-tertiary: #93C5FD; /* Tailwind blue-300 */
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #F9FAFB; /* Matches backgroundLight */
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #FAC94E, #EAB308); /* primaryColor to accentColor */
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #FACC59, #3B82F6); /* secondaryColor to blue-accent */
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Grid pattern for background */
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Custom shadows */
.shadow-soft {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-glow {
  box-shadow: 0 10px 25px -3px rgba(250, 201, 78, 0.3), 0 4px 6px -2px rgba(250, 201, 78, 0.2); /* Uses primaryColor */
}

.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Custom gradients */
.bg-gradient-accent {
  background: linear-gradient(135deg, #FAC94E 0%, #3B82F6 100%); /* primaryColor to blue-accent */
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #FAC94E 0%, #EAB308 100%); /* primaryColor to accentColor */
}

.bg-gradient-secondary {
  background: linear-gradient(135deg, #FACC59 0%, #FFD97C 100%); /* secondaryColor to tertiaryColor */
}

.bg-gradient-warm {
  background: linear-gradient(135deg, #EAB308 0%, #3B82F6 100%); /* accentColor to blue-accent */
}

/* Text gradients */
.text-gradient-primary {
  background: linear-gradient(135deg, #FAC94E, #EAB308); /* primaryColor to accentColor */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-secondary {
  background: linear-gradient(135deg, #FACC59, #3B82F6); /* secondaryColor to blue-accent */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(250, 201, 78, 0.4); } /* Uses primaryColor */
  50% { box-shadow: 0 0 40px rgba(250, 201, 78, 0.8); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

/* Glass morphism effect */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Custom button styles */
.btn-primary {
  background: linear-gradient(135deg, #FAC94E, #EAB308); /* primaryColor to accentColor */
  color: #1F2937; /* textDark for contrast */
  padding: 12px 32px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(250, 201, 78, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(250, 201, 78, 0.4);
}

.btn-secondary {
  background: linear-gradient(135deg, #FACC59, #3B82F6); /* secondaryColor to blue-accent */
  color: #1F2937; /* textDark for contrast */
  padding: 12px 32px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

/* Custom focus states */
.focus-ring {
  transition: box-shadow 0.15s ease-in-out;
}

.focus-ring:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(250, 201, 78, 0.1); /* Uses primaryColor */
}

/* Responsive typography */
@media (max-width: 640px) {
  .text-responsive-xl {
    font-size: 2rem;
    line-height: 2.5rem;
  }
}

@media (min-width: 641px) {
  .text-responsive-xl {
    font-size: 3rem;
    line-height: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .text-responsive-xl {
    font-size: 4rem;
    line-height: 4.5rem;
  }
}

/* Loading spinner */
.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #F9FAFB; /* Matches backgroundLight */
  border-top: 2px solid #FAC94E; /* Matches primaryColor */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Enhanced form inputs */
.input-enhanced {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #FFD97C; /* Matches tertiaryColor */
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.input-enhanced:focus {
  outline: none;
  border-color: #3B82F6; /* blue-accent */
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  background: rgba(255, 255, 255, 0.15);
}

/* Custom selection */
::selection {
  background: rgba(250, 201, 78, 0.2); /* Uses primaryColor */
  color: inherit;
}

/* Enhance transitions for better UX */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Custom mobile spacing */
@media (max-width: 768px) {
  .mobile-px {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .mobile-py {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

/* Ensure footer visibility on all screen sizes */
footer input {
  @apply bg-white text-text-dark border-tertiary rounded-md p-2 w-full; /* Uses tertiaryColor */
}

footer button {
  @apply bg-primary hover:bg-accent text-text-dark rounded-md px-4 py-2 mt-2; /* Uses primaryColor, accentColor, textDark */
}

/* Fix potential overflow issues in sections */
section {
  @apply overflow-visible;
}