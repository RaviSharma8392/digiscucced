/**
 * BusinessPage.jsx
 *
 * Generic business page (for non-explicit types)
 * Dynamically loads the appropriate template based on type
 */

import { useParams, useOutletContext } from "react-router-dom";
import { getBusinessBySlug } from "../../services/dataService";
import { useEffect, useState } from "react";
import { SchoolTemplate1 } from "../../templates/school/SchoolTemplate1";

// Template registry - add more template imports as needed
const templateRegistry = {
  schoolTemplate1: SchoolTemplate1,
  // Add more templates here as they're created
  // coachingTemplate1: CoachingTemplate1,
  // homestayTemplate1: HomestayTemplate1,
};

export function BusinessPage() {
  const { slug } = useParams();
  const { business } = useOutletContext() || {};
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Get business data and determine template
  useEffect(() => {
    try {
      if (!business) {
        setError("Business data not found");
        setLoading(false);
        return;
      }

      const templateName = business.template || "schoolTemplate1";
      const Template = templateRegistry[templateName];

      if (!Template) {
        setError(`Template "${templateName}" not found`);
        setLoading(false);
        return;
      }

      setSelectedTemplate(Template);
      setError(null);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [business, slug]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-600">Error: {error}</div>;
  }

  if (!business) {
    return <div className="text-center py-20">Business not found</div>;
  }

  if (!selectedTemplate) {
    return <div className="text-center py-20">No template available</div>;
  }

  // Render selected template with business data
  const SelectedTemplate = selectedTemplate;
  return <SelectedTemplate data={business} />;
}

export default BusinessPage;
