/**
 * SchoolPage.jsx
 *
 * School business page
 * Fetches data from service and passes to template
 */

import { useParams, useOutletContext } from "react-router-dom";
import { getBusinessBySlug } from "../../services/dataService";
import { SchoolTemplate1 } from "../../templates/school/SchoolTemplate1";
import { useEffect, useState } from "react";

export function SchoolPage() {
  const { slug } = useParams();
  const { business } = useOutletContext() || {};
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get school data from service
  useEffect(() => {
    try {
      const schoolData = getBusinessBySlug(slug);
      if (!schoolData) {
        setError("School not found");
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-600">Error: {error}</div>;
  }

  if (!business) {
    return <div className="text-center py-20">Business not found</div>;
  }

  // Render template with data
  return <SchoolTemplate1 data={business} />;
}

export default SchoolPage;
