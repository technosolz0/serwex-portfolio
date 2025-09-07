// components/PolicyTemplate.tsx
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

interface PolicyTemplateProps {
  title: string;
  content: string;
}

const PolicyTemplate: React.FC<PolicyTemplateProps> = ({ title, content }) => {
  return (
    <motion.article 
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
      <ReactMarkdown className="prose mx-auto prose-headings:text-primary prose-a:text-accent">{content}</ReactMarkdown> {/* Enhanced prose styling */}
    </motion.article>
  );
};

export default PolicyTemplate;