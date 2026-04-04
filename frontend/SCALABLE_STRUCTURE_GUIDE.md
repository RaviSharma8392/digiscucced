# 📋 Data-Driven Scalable Frontend Architecture

**Status:** ✅ Complete  
**Created:** April 2026  
**Purpose:** Modular, maintainable, data-driven frontend supporting multiple business types and templates

---

## 🎯 Overview

This architecture separates **data from presentation**, allowing you to:

- ✅ Add new businesses without touching template code
- ✅ Create new templates reusing existing section components
- ✅ Change business data through a single service
- ✅ Scale to 100+ businesses with minimal effort
- ✅ Support multiple business types (schools, coaching, homestays, hotels, companies)

---

## 📁 Architecture & File Structure

```
src/
├── services/
│   ├── businessData.json          ← ALL BUSINESS DATA (single source of truth)
│   └── dataService.js             ← Service functions to access data
│
├── templates/                      ← PRESENTATION-ONLY COMPONENTS
│   ├── school/
│   │   └── SchoolTemplate1.jsx     ← Receives data via props
│   ├── coaching/
│   │   └── CoachingTemplate1.jsx
│   ├── homestay/
│   │   └── HomestayTemplate1.jsx
│   └── hotel/
│
├── components/
│   ├── sections/                   ← REUSABLE SECTIONS
│   │   ├── Hero.jsx                ← Works with all templates
│   │   ├── About.jsx
│   │   ├── Stats.jsx
│   │   └── ...
│   └── ui/                         ← REUSABLE UI COMPONENTS
│       ├── Button.jsx
│       ├── Card.jsx
│       └── ...
│
├── layouts/                        ← SHARED LAYOUTS
│   ├── BusinessLayout.jsx          ← Header, Footer, NavBar
│   └── TemplateLayout.jsx
│
├── pages/                          ← PAGE COMPONENTS (minimal logic)
│   ├── SchoolPage.jsx              ← Fetches data, passes to template
│   ├── BusinessPage.jsx            ← Generic business page
│   └── ...
│
└── App.jsx                         ← Routing
```

---

## 🔄 Data Flow

```
URL: /sunrise
    ↓
App Router → BusinessLayout
    ↓
SchoolPage (fetches data via dataService)
    ↓
businessData.json (source of truth)
    ↓
SchoolTemplate1 (receives data via props)
    ↓
HeroSection + AboutSection + StatsSection (reusable)
    ↓
Rendered UI
```

---

## 📊 Key Files Explained

### 1. `services/businessData.json`

**Purpose:** Single source of truth for ALL business content

```json
{
  "schools": [
    {
      "id": "school-sunrise",
      "slug": "sunrise",
      "name": "Sunrise Public School",
      "type": "school",
      "template": "schoolTemplate1",
      "theme": { "primary": "#0f3460", "accent": "#e8a020" },
      "hero": { "title": "...", "badge": "..." },
      "about": { "heading": "...", "highlights": [...] },
      "stats": [{ "value": "2,400+", "label": "Students" }],
      "contact": { "email": "...", "phone": "..." }
    }
  ],
  "coaching": [...],
  "homestays": [...],
  "hotels": [...],
  "companies": [...]
}
```

**To Add New Business:**

1. Open `services/businessData.json`
2. Add entry to appropriate category
3. Done! ✅ No code changes needed

### 2. `services/dataService.js`

**Purpose:** Provides functions to access business data

```javascript
// Get business by slug
getBusinessBySlug("sunrise");

// Get all businesses of a type
getBusinessesByType("school");

// Get business by type and slug
getBusinessByTypeAndSlug("school", "sunrise");

// Get all available slugs for a type
getAllSlugs("school");

// Get default template for a type
getDefaultTemplate("school");
```

**Never modify this directly** - just use the functions!

### 3. `templates/school/SchoolTemplate1.jsx`

**Purpose:** Presentation-only component that receives data via props

✅ **What to do:**

- Arrange sections (Hero, About, Stats)
- Pass data to reusable sections
- Apply theme colors

❌ **What NOT to do:**

- Hard-code business data
- Fetch data from API
- Store business-specific logic

### 4. `components/sections/Hero.jsx`

**Purpose:** Reusable section component

✅ **Features:**

- Works with ANY business type
- Receives data as props
- Uses theme colors from parent
- Responsive design

```javascript
<HeroSection data={businessData.hero} theme={businessData.theme} />
```

### 5. `layouts/BusinessLayout.jsx`

**Purpose:** Shared layout (Navbar, Footer, Contact Button)

✅ **Used for:**

- All business pages
- Consistent branding
- Navigation

✅ **Provided by:** BusinessLayout wrapper via React Router

### 6. `pages/SchoolPage.jsx`

**Purpose:** Fetches data and displays template

```javascript
// 1. Get slug from URL
const { slug } = useParams();

// 2. Fetch data via service
const business = getBusinessBySlug(slug);

// 3. Pass to template
<SchoolTemplate1 data={business} />;
```

---

## 🚀 How to Use

### Add A New School

1. **Open** `src/services/businessData.json`

2. **Add entry** to schools array:

```json
{
  "id": "school-newschool",
  "slug": "newschool",
  "name": "New School Name",
  "type": "school",
  "template": "schoolTemplate1",
  "city": "City",
  "theme": { "primary": "#0f3460", "accent": "#e8a020" },
  "hero": { "title": "...", "badge": "..." },
  "about": { "heading": "..." },
  "stats": [...],
  "contact": { "email": "...", "phone": "..." }
}
```

3. **Done!** Visit: `http://localhost:5173/newschool`

### Create A New Template

1. **Create folder**: `src/templates/school/`

2. **Create component**: `SchoolTemplate2.jsx`

```jsx
import { HeroSection } from "../sections/Hero";
import { AboutSection } from "../sections/About";

export function SchoolTemplate2({ data }) {
  return (
    <>
      <HeroSection data={data.hero} theme={data.theme} />
      <AboutSection data={data.about} theme={data.theme} />
      {/* Add more sections */}
    </>
  );
}
```

3. **Update businessData.json**:

```json
{ "template": "schoolTemplate2", ... }
```

4. **Register in templateRegistry** (`src/pages/BusinessPage.jsx`):

```javascript
import { SchoolTemplate2 } from "../../templates/school/SchoolTemplate2";

const templateRegistry = {
  schoolTemplate1: SchoolTemplate1,
  schoolTemplate2: SchoolTemplate2, // ← Add this
};
```

### Create A New Business Type

1. **Create folder**: `src/templates/newtype/`

2. **Create template**: `NewTypeTemplate1.jsx`

3. **Add to businessData.json**:

```json
"newtypes": [
  {
    "id": "newtype-1",
    "slug": "newtype-1",
    "name": "New Type Business",
    "type": "newtype",
    "template": "newtypeTemplate1",
    ...
  }
]
```

4. **Create new section components** (if needed)

5. **Register in templateRegistry**

6. **Done!** Create routing as needed

### Create A Reusable Section

1. **Create** `src/components/sections/Features.jsx`:

```jsx
export function FeaturesSection({ data, theme = {} }) {
  return (
    <section className="py-20">
      {data.map((feature) => (
        <div key={feature.id}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
```

2. **Use in templates**:

```jsx
import { FeaturesSection } from "../sections/Features";

<FeaturesSection data={data.features} theme={data.theme} />;
```

3. **Use in ANY template** (reusable!)

---

## 📈 Adding 100+ Businesses

**No code changes needed!**

Just keep adding entries to `businessData.json`:

```json
"schools": [
  { "slug": "school-1", ... },
  { "slug": "school-2", ... },
  { "slug": "school-3", ... },
  ...
  { "slug": "school-100", ... }
]
```

All automatically:

- Routed via URL pattern
- Rendered with templates
- Styled with theme colors
- Include header/footer

---

## 🎨 Styling Guide

### Theme Colors (Per Business)

In `businessData.json`:

```json
"theme": {
  "primary": "#0f3460",      ← Main color
  "accent": "#e8a020",       ← Secondary color
  "background": "#ffffff",   ← Background
  "text": "#1e293b"          ← Text color
}
```

### Usage in Components

```jsx
<button style={{ backgroundColor: theme.primary }}>Click Me</button>
```

### Tailwind CSS

Combine Tailwind with inline styles:

```jsx
<div className="py-20 px-4">
  {" "}
  {/* Tailwind */}
  <h1 style={{ color: theme.primary }}>
    {" "}
    {/* Inline */}
    Heading
  </h1>
</div>
```

---

## 🔍 Service Functions Reference

```javascript
import {
  getAllBusinesses, // Get all businesses
  getBusinessBySlug, // Get by slug
  getBusinessesByType, // Get by type
  getBusinessByTypeAndSlug, // Get specific business
  getAllSlugs, // Get all slugs
  getDefaultTemplate, // Get template name
  businessExists, // Check if exists
  getBusinessStats, // Get stats
} from "../../services/dataService";

// Examples
getAllBusinesses(); // All businesses
getAllBusinesses("school"); // All schools
getBusinessBySlug("sunrise"); // Specific business
getBusinessesByType("school"); // All schools
getBusinessByTypeAndSlug("school", "sunrise");
getAllSlugs("school"); // ['sunrise', 'ric-nakuchiyatal', ...]
getDefaultTemplate("school"); // 'schoolTemplate1'
businessExists("sunrise"); // true/false
getBusinessStats(); // { totalSchools: 2, ... }
```

---

## 📝 Best Practices

### ✅ DO

- Update content in `businessData.json`
- Create reusable sections in `components/sections/`
- Pass data via props to sections
- Use theme colors from data
- Create new templates by composing sections
- Keep templates presentation-only

### ❌ DON'T

- Hard-code business data in templates
- Create business-specific sections
- Fetch data in template components
- Mix data logic with presentation
- Duplicate section components
- Put business logic in pages

---

## 🧪 Testing New Businesses

```javascript
// In browser console
import { getBusinessBySlug } from "./services/dataService";

// Check if business exists
console.log(getBusinessBySlug("sunrise"));

// Check all schools
console.log(getBusinessBySlug("school"));
```

---

## 🔧 Debugging

### Business Not Showing

1. Check `businessData.json` - entry exists?
2. Check slug spelling matches exactly
3. Check theme colors loaded
4. Check browser console for errors

### Template Not Loading

1. Check template registered in `templateRegistry`
2. Check template file exists
3. Check imports are correct
4. Check data passed to template

### Styling Not Applied

1. Check theme colors in `businessData.json`
2. Check component receiving theme prop
3. Check CSS class names valid
4. Check Tailwind purge includes file

---

## 📚 File Checklist

- ✅ `src/services/businessData.json` - Business data
- ✅ `src/services/dataService.js` - Service functions
- ✅ `src/components/sections/Hero.jsx` - Reusable sections
- ✅ `src/components/sections/About.jsx`
- ✅ `src/components/sections/Stats.jsx`
- ✅ `src/components/ui/Button.jsx` - Reusable UI
- ✅ `src/components/ui/Card.jsx`
- ✅ `src/templates/school/SchoolTemplate1.jsx` - Templates
- ✅ `src/layouts/BusinessLayout.jsx` - Layouts
- ✅ `src/pages/SchoolPage.jsx` - Pages
- ✅ `src/pages/BusinessPage.jsx` - Generic page

---

## 🎉 Summary

| Task              | Location                       | Effort    |
| ----------------- | ------------------------------ | --------- |
| Add business      | `businessData.json`            | 2 min ✅  |
| Create template   | `src/templates/`               | 30 min ✅ |
| Create section    | `src/components/sections/`     | 20 min ✅ |
| Update content    | `businessData.json`            | 1 min ✅  |
| Change theme      | `businessData.json`            | 1 min ✅  |
| Add business type | `businessData.json` + template | 1 hour ✅ |

---

## 🚀 Next Steps

1. ✅ Add more businesses to `businessData.json`
2. ✅ Create additional section components
3. ✅ Build more templates using sections
4. ✅ Connect to real API when ready
5. ✅ Scale to 100+ businesses

---

**Ready to scale?** Start by adding new businesses to `businessData.json`! 🚀
