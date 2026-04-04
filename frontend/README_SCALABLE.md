# Frontend Repository - Scalable Architecture Guide

> **Last Updated:** April 2026  
> **Status:** Production-Ready ✅

---

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
# Copy environment template
cp .env.example .env.local

# Start development server
npm run dev
```

### Production Build

```bash
cp .env.example .env.production
# Edit with production values
npm run build
```

---

## 📁 Project Structure

### New Files for Scalability

```
src/
├── config/
│   ├── environment.js          # Environment variables management
│   ├── constants.js            # App-wide constants & enums
│   └── index.js                # Config exports
│
├── services/
│   ├── api/
│   │   ├── apiClient.js       # HTTP client with retry & cache
│   │   ├── businessService.js # Business/site data service
│   │   └── schoolDataService.js # School-specific data service
│   ├── error/
│   │   └── errorHandler.js    # Centralized error handling
│   └── index.js               # Service exports
│
├── hooks/
│   ├── useSchoolData.js       # School data fetching hook
│   ├── useAsync.js            # Generic async hook
│   └── index.js               # Hook exports
│
├── utils/
│   ├── helpers.js             # Common utility functions
│   ├── validation.js          # Form validation utilities
│   ├── formatters.js          # Data formatting utilities
│   └── index.js               # Utils exports
│
└── .env.example               # Environment template
```

---

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and customize:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api

# Features
VITE_USE_MOCK_DATA=true
VITE_DISABLE_ANALYTICS=true
VITE_DISABLE_ERROR_TRACKING=true

# Logging
VITE_LOG_LEVEL=debug
```

### Access Config in Code

```javascript
import { environment } from "@/config";

console.log(environment.isDevelopment);
console.log(environment.api.baseURL);
console.log(environment.cache.enabled);
```

---

## 🔌 Service Layer Usage

### API Client

```javascript
import { apiClient } from "@/services";

// GET with auto-caching
const schools = await apiClient.get("/schools");

// POST
const result = await apiClient.post("/schools", { name: "New School" });

// Skip cache for fresh data
const fresh = await apiClient.get("/schools", { skipCache: true });

// Clear cache
apiClient.clearCache();
```

### Business Service

```javascript
import { businessService } from "@/services";

// Get single business by slug
const business = await businessService.getBusinessBySlug("sunrise");

// Get all businesses
const all = await businessService.getAllBusinesses();

// Clear cache
businessService.clearCache("sunrise");
```

### School Data Service

```javascript
import { schoolDataService } from "@/services";

// Get school data
const schoolData = await schoolDataService.getSchoolData("sunrise");

// Validate slug exists
const exists = await schoolDataService.validateSchoolSlug("sunrise");

// Get all available slugs
const slugs = schoolDataService.getAllSchoolSlugs();
```

### Error Handling

```javascript
import { logger, ErrorHandler } from "@/services";

// Logging
logger.debug("Debug message");
logger.info("Info message");
logger.warn("Warning message");
logger.error("Error message", error);

// Handle errors
try {
  const data = await apiClient.get("/data");
} catch (error) {
  const formatted = ErrorHandler.handle(error, "ComponentName");
  console.log(formatted);
}
```

---

## 🪝 Custom Hooks

### useSchoolData

For fetching school data with loading and error states:

```javascript
import { useSchoolData } from "@/hooks";

export function MyComponent() {
  const { data, loading, error } = useSchoolData("sunrise");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{data.school.name}</div>;
}
```

### useAsync

Generic hook for any async operation:

```javascript
import { useAsync } from "@/hooks";

export function MyComponent() {
  const { data, isLoading, isError, execute } = useAsync(
    async () => {
      const response = await apiClient.get("/data");
      return response;
    },
    [],
    true, // Run on mount
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data && <p>{data.name}</p>}
      <button onClick={execute}>Refresh</button>
    </div>
  );
}
```

---

## 🛠️ Utilities

### Helpers

```javascript
import {
  formatPhoneNumber,
  slugToTitle,
  truncateText,
  debounce,
  throttle,
} from "@/utils";

formatPhoneNumber("9876543210"); // '+91-9876-543-210'
slugToTitle("sunrise-public-school"); // 'Sunrise Public School'
truncateText("Very long text...", 10); // 'Very long...'

// Debounce search input
const handleSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 300);
```

### Validation

```javascript
import { validateEmail, validatePhoneNumber, validateForm } from "@/utils";

validateEmail("user@example.com"); // true
validatePhoneNumber("9876543210"); // true

// Form validation
const rules = {
  email: [{ type: "required" }, { type: "email" }],
  phone: [{ type: "phone" }],
  name: [{ type: "minLength", value: 3 }],
};

const errors = validateForm(formData, rules);
```

### Formatters

```javascript
import {
  formatDate,
  formatCurrency,
  formatNumber,
  formatFileSize,
} from "@/utils";

formatDate("2026-04-03"); // 'April 3, 2026'
formatCurrency(50000); // '₹50,00,000'
formatNumber(1000000); // '10,00,000' (Indian style)
formatFileSize(1024); // '1 KB'
```

---

## 📱 Adding a New Business Type

### 1. Create Template Structure

```
templates/
└── newtype/
    ├── newtypeTemplate1/
    │   ├── components/
    │   │   ├── section/
    │   │   ├── ui/
    │   │   └── home/
    │   ├── config/
    │   │   └── newtypeConfig.js
    │   ├── pages/
    │   ├── routes/
    │   │   └── NewTypeRoutes.jsx
    │   ├── services/
    │   │   └── newtypeService.js
    │   ├── layout/
    │   │   └── NewTypeLayout.jsx
    │   └── styles/
    ├── newtypeTemplate2/
    └── newtypeTemplate3/
```

### 2. Create Data Service

```javascript
// services/api/newtypeService.js
class NewTypeService {
  async getNewTypeData(slug) {
    // Fetch from API or mock data
  }

  async getAllNewTypes() {
    // Get all instances
  }
}

export default new NewTypeService();
```

### 3. Register in Template Registry

```javascript
// templates/templateRegistry.js
import NewTypeRoutes from "./newtype/newtypeTemplate1/routes/NewTypeRoutes.jsx";

export const templateRegistry = {
  // ... existing templates
  newtypeTemplate1: NewTypeRoutes,
  newtypeTemplate2: NewTypeRoutes, // Can reuse or create new
};
```

### 4. Add Business Entry

```javascript
// data/mockBusinesses.js
export const siteManifests = {
  // ... existing
  "newbusiness-slug": {
    slug: "newbusiness",
    template: "newtypeTemplate1",
    // ... rest of config
  },
};
```

---

## 🔄 Common Tasks

### Fetching Data in Components

```javascript
// ✅ Good: Use custom hook
import { useSchoolData } from '@/hooks';

export default function SchoolPage() {
  const { data, loading, error } = useSchoolData(slug);
  // ...
}

// ✅ Also Good: Use useAsync for flexible logic
import { useAsync } from '@/hooks';

export default function CustomPage() {
  const { data, isLoading } = useAsync(async () => {
    return await schoolDataService.getSchoolData(slug);
  });
  // ...
}
```

### Validating Forms

```javascript
import { validateForm } from "@/utils";

const handleSubmit = (e) => {
  e.preventDefault();

  const rules = {
    email: [{ type: "required" }, { type: "email" }],
    phone: [{ type: "required" }, { type: "phone" }],
  };

  const errors = validateForm(formData, rules);

  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

  // Submit form
};
```

### Formatting Display Data

```javascript
import { formatDate, formatCurrency, truncateText } from "@/utils";

export function DataDisplay() {
  return (
    <div>
      <p>Date: {formatDate(data.createdAt)}</p>
      <p>Fee: {formatCurrency(data.fee)}</p>
      <p>Bio: {truncateText(data.bio, 100)}</p>
    </div>
  );
}
```

### Error Handling

```javascript
import { logger, ErrorHandler } from "@/services";

export function DataComponent() {
  const [error, setError] = useState(null);

  useEffect(() => {
    businessService.getBusinessBySlug(slug).catch((err) => {
      const formatted = ErrorHandler.handle(err, "DataComponent");
      setError(formatted.message);
      logger.error("Failed to load business", err);
    });
  }, [slug]);

  if (error) return <div className="error">{error}</div>;
  // ...
}
```

---

## 🚀 Deployment

### Pre-deployment Checklist

- [ ] Update `.env.production` with production values
- [ ] Remove mock data flag: `VITE_USE_MOCK_DATA=false`
- [ ] Verify API endpoints are correct
- [ ] Run `npm run build` and check for errors
- [ ] Test all business types
- [ ] Check cache duration settings
- [ ] Verify error tracking is enabled

### Build Commands

```bash
# Development (mock data)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📊 Monitoring & Performance

### Browser DevTools

#### Network Tab

- Monitor API calls
- Check for failed requests
- Verify cache headers

#### Application Tab

- Clear localStorage caches
- Inspect cache data
- Check storage usage

#### Console

- View debug logs: `logger.debug()`
- Monitor errors: `logger.error()`
- Check performance warnings

### Performance Targets

| Metric              | Target | How to Measure       |
| ------------------- | ------ | -------------------- |
| Initial Load        | < 2s   | DevTools Lighthouse  |
| Time to Interactive | < 3s   | DevTools Performance |
| Cache Hit Rate      | > 80%  | Monitor API calls    |
| API Error Rate      | < 1%   | Error tracking logs  |

---

## 🤝 Contributing

### Code Style

```javascript
// ✅ Good: Use utilities and services
import { validateEmail } from "@/utils";
import { businessService } from "@/services";

// ❌ Avoid: Hard-coded values and direct API calls
const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const business = await fetch(`/api/business/${slug}`);
```

### Adding New Features

1. **Identify the layer:** UI, logic, service, or data?
2. **Place in correct folder:** Components, hooks, services, utils?
3. **Use existing patterns:** Follow similar features
4. **Test locally:** `npm run dev`
5. **Document changes:** Update relevant README

---

## 📞 Troubleshooting

### "School not found" Error

**Cause:** Slug mismatch between business manifest and school registry

**Solution:**

```javascript
// Ensure slug matches in BOTH places:
// 1. data/mockBusinesses.js - slug property
// 2. services/schoolHomeService.js - registry key
```

### Cache Not Updating

**Solution:** Clear cache in DevTools

```javascript
// In browser console
localStorage.clear();
apiClient.clearCache();
location.reload();
```

### API Calls Not Working

**Check:**

1. `.env` has correct `VITE_API_BASE_URL`
2. `VITE_USE_MOCK_DATA=false` in production
3. CORS headers on backend
4. Network tab shows request/response

---

## 📚 Additional Resources

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Detailed architecture documentation
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📝 Version History

- **v1.0.0** (April 2026) - Initial scalable architecture
