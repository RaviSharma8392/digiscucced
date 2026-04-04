import { useParams } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";

import { getBusinessBySlug } from "../services/businessService";
import { templateRegistry } from "../templates/templateRegistry";

export default function BusinessRouterResolver() {
  const { businessSlug } = useParams();

  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    async function loadBusiness() {
      try {
        const data = await getBusinessBySlug(businessSlug);
        console.log(data);

        if (!active) return;

        if (!data) {
          setError("Business not found");
        } else {
          setBusiness(data);
        }
      } catch (err) {
        setError("Failed to load business");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadBusiness();

    return () => {
      active = false;
    };
  }, [businessSlug]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  const TemplateRouter = templateRegistry[business.template];

  if (!TemplateRouter) return <div>Template not found</div>;

  return (
    <Suspense fallback={<div>Loading template...</div>}>
      <TemplateRouter business={business} />
    </Suspense>
  );
}
