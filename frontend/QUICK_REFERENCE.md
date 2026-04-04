# Developer Quick Reference Card

## 📚 Cheat Sheet - Copy & Paste Ready

### Configuration & Environment

```javascript
// Access environment config
import { environment } from "@/config";

environment.isDevelopment; // true/false
environment.isProduction; // true/false
environment.api.baseURL; // 'http://localhost:3000/api'
environment.cache.enabled; // true
environment.features.mockData; // true
environment.logging.level; // 'debug' | 'info' | 'warn' | 'error'
```

### Services - Fetching Data

```javascript
// API Client
import { apiClient } from "@/services";
const data = await apiClient.get("/endpoint");
const result = await apiClient.post("/endpoint", { data });
apiClient.clearCache();

// Business Service
import { businessService } from "@/services";
const business = await businessService.getBusinessBySlug("sunrise");
const all = await businessService.getAllBusinesses();
businessService.clearCache("sunrise");

// School Data Service
import { schoolDataService } from "@/services";
const school = await schoolDataService.getSchoolData("sunrise");
const exists = await schoolDataService.validateSchoolSlug("sunrise");
const slugs = schoolDataService.getAllSchoolSlugs();
```

### Services - Error Handling & Logging

```javascript
// Logging
import { logger } from "@/services";
logger.debug("Debug", data);
logger.info("Info message");
logger.warn("Warning message");
logger.error("Error", error);

// Error Handling
import { ErrorHandler } from "@/services";
const error = ErrorHandler.handle(err, "ComponentName");
ErrorHandler.handleNetworkError(err);
ErrorHandler.handleValidationError(err);
```

### Custom Hooks

```javascript
// School Data Hook
import { useSchoolData } from "@/hooks";
const { data, loading, error } = useSchoolData(slug);

// Generic Async Hook
import { useAsync } from "@/hooks";
const { data, isLoading, isError, execute } = useAsync(
  async () => await apiClient.get("/endpoint"),
  [],
  true,
);
```

### Utilities - Helpers

```javascript
import {
  formatPhoneNumber,
  slugToTitle,
  titleToSlug,
  truncateText,
  isEmpty,
  debounce,
  throttle,
  retryWithBackoff,
  getNestedValue,
  capitalizeFirst,
  deepMerge,
} from "@/utils";

formatPhoneNumber("9876543210"); // '+91-9876-543-210'
slugToTitle("sunrise-public-school"); // 'Sunrise Public School'
titleToSlug("Sunrise Public School"); // 'sunrise-public-school'
truncateText("Very long text", 10); // 'Very lon...'
isEmpty({}); // true
capitalizeFirst("hello"); // 'Hello'
getNestedValue(obj, "school.contact.phone"); // Safe access
deepMerge(objA, objB); // Merge objects

// Functional Utilities
const debouncedFn = debounce(fn, 300);
const throttledFn = throttle(fn, 300);
```

### Utilities - Validation

```javascript
import {
  validateEmail,
  validatePhoneNumber,
  validateUrl,
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validateDateFormat,
  validateForm,
} from "@/utils";

validateEmail("user@example.com"); // true
validatePhoneNumber("9876543210"); // true
validateUrl("https://example.com"); // true
validateRequired("text"); // true
validateMinLength("text", 3); // true
validateMaxLength("text", 10); // true
validateDateFormat("2026-04-03"); // true

// Form validation
const errors = validateForm(formData, {
  email: [{ type: "required" }, { type: "email" }],
  phone: [{ type: "phone" }],
  name: [{ type: "minLength", value: 3 }],
});
```

### Utilities - Formatters

```javascript
import {
  formatDate,
  formatDateTime,
  formatTime,
  formatNumber,
  formatCurrency,
  formatFileSize,
  formatPercentage,
  formatRelativeTime,
  formatAddress,
  formatPersonName,
  formatTitleCase,
  formatSentenceCase,
} from "@/utils";

formatDate("2026-04-03"); // 'April 3, 2026'
formatDateTime("2026-04-03T14:30:00"); // 'April 3, 2026 2:30 PM'
formatTime("14:30:00"); // '2:30 PM'
formatNumber(1000000); // '10,00,000' (Indian style)
formatCurrency(50000); // '₹50,00,000'
formatFileSize(1024); // '1 KB'
formatPercentage(0.85); // '85%'
formatRelativeTime("2026-04-03"); // 'in 2 months'
formatAddress({ street: "123 Main", city: "NYC" }); // '123 Main, NYC'
formatPersonName({ firstName: "John", lastName: "Doe" }); // 'John Doe'
formatTitleCase("hello world"); // 'Hello World'
formatSentenceCase("hello world"); // 'Hello world'
```

### Constants & Enums

```javascript
import {
  BUSINESS_TYPES,
  TEMPLATE_TYPES,
  HTTP_STATUS,
  ERROR_MESSAGES,
  STORAGE_KEYS,
  ROUTES,
} from "@/config";

// Usage
if (business.type === BUSINESS_TYPES.SCHOOL) {
}
if (response.status === HTTP_STATUS.NOT_FOUND) {
}
localStorage.setItem(STORAGE_KEYS.CACHED_BUSINESS + slug, data);
```

---

## 🎯 Common Patterns

### Pattern 1: Fetch Data in Component

```javascript
import { useSchoolData } from "@/hooks";

export function SchoolPage() {
  const { data, loading, error } = useSchoolData(slug);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{data.school.name}</div>;
}
```

### Pattern 2: Form with Validation

```javascript
import { validateForm } from "@/utils";

export function ContactForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const rules = {
      email: [{ type: "required" }, { type: "email" }],
      phone: [{ type: "phone" }],
    };

    const validationErrors = validateForm(formData, rules);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit form
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

### Pattern 3: Display Formatted Data

```javascript
import { formatDate, formatCurrency, truncateText } from "@/utils";

export function DataDisplay({ item }) {
  return (
    <div>
      <p>{formatDate(item.date)}</p>
      <p>{formatCurrency(item.amount)}</p>
      <p>{truncateText(item.description, 100)}</p>
    </div>
  );
}
```

### Pattern 4: Custom Data Fetching

```javascript
import { useAsync } from "@/hooks";
import { businessService } from "@/services";

export function CustomComponent() {
  const { data, execute } = useAsync(
    async () => await businessService.getAllBusinesses(),
    [],
    true,
  );

  return (
    <div>
      {/* Render data */}
      <button onClick={execute}>Refresh</button>
    </div>
  );
}
```

### Pattern 5: Error Handling

```javascript
import { logger, ErrorHandler } from "@/services";

async function fetchData() {
  try {
    const data = await apiClient.get("/endpoint");
    logger.info("Data fetched successfully");
    return data;
  } catch (error) {
    const formattedError = ErrorHandler.handle(error, "fetchData");
    logger.error(formattedError.message, error);
    throw error;
  }
}
```

---

## 🔄 File Import Cheatsheet

```javascript
// Configuration
import { environment } from "@/config";
import { BUSINESS_TYPES, STORAGE_KEYS } from "@/config";

// Services
import {
  apiClient,
  businessService,
  schoolDataService,
  logger,
} from "@/services";
import { ErrorHandler } from "@/services";

// Hooks
import { useSchoolData, useAsync } from "@/hooks";

// Utilities (individual imports)
import { formatDate, validateEmail, slugToTitle } from "@/utils";

// Utilities (namespaced imports)
import * as helpers from "@/utils/helpers";
import * as validation from "@/utils/validation";
import * as formatters from "@/utils/formatters";
```

---

## ⚡ Performance Tips

### Caching

```javascript
// Cache is automatic for GET requests
const data1 = await apiClient.get("/schools"); // Calls API
const data2 = await apiClient.get("/schools"); // Returns from cache (same request)

// Force fresh data
const fresh = await apiClient.get("/schools", { skipCache: true });

// Clear specific cache
businessService.clearCache("sunrise");
```

### Debounce & Throttle

```javascript
// Debounce: useful for search inputs
const handleSearch = debounce((query) => {
  apiClient.get(`/search?q=${query}`);
}, 300);

// Throttle: useful for scroll or resize events
const handleScroll = throttle(() => {
  // Check scroll position
}, 300);
```

### Lazy Data Loading

```javascript
// Use when slug changes
const { data, loading } = useSchoolData(slug);

// Data refetches automatically when slug changes
```

---

## 🆘 Quick Troubleshooting

| Issue                  | Quick Fix                                         |
| ---------------------- | ------------------------------------------------- |
| Data not updating      | `apiClient.clearCache()` or refresh page          |
| API not found          | Check `.env` file has correct `VITE_API_BASE_URL` |
| Validation not working | Import from `@/utils` not elsewhere               |
| Build fails            | Clear `node_modules` and run `npm install` again  |
| Stale imports          | Restart dev server (`npm run dev`)                |

---

## 📖 Documentation Links

- **Full Architecture:** `ARCHITECTURE.md`
- **Quick Start:** `README_SCALABLE.md`
- **Getting Started:** `START_HERE.md`
- **This Card:** `QUICK_REFERENCE.md`

---

**Created:** April 2026  
**Print & Keep Handy!** 📌
