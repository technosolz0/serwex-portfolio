import { marked } from 'marked';

interface PolicyTemplateProps {
  title: string;
  content: string;
}

const PolicyTemplate: React.FC<PolicyTemplateProps> = ({ title, content }) => {
  const htmlContent = marked(content); // Convert markdown to HTML

  return (
    <div className="policy-container">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default PolicyTemplate;