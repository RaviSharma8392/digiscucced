# Admissions Module — README

## File Structure

```
admissions/
├── config/
│   └── schoolConfig.js          ← ONE file drives everything. Change this per school.
├── hooks/
│   └── useAdmissionForm.js      ← Form state, validation, submission logic
├── components/
│   ├── AdmissionsHero.jsx       ← Hero banner section
│   ├── AdmissionInfoSections.jsx← Process · Classes · Fees · Dates · Documents
│   ├── AdmissionForm.jsx        ← Full application form
│   └── AdmissionFAQ.jsx         ← Accordion FAQ
└── pages/
    └── AdmissionsPage.jsx       ← Assembles all sections → your route target
```

---

## How to white-label for a new school

1. **Duplicate** `config/schoolConfig.js` and rename, or load config from Firebase / CMS.
2. **Change** the config values — name, colors, classes, fees, FAQs, dates, etc.
3. **Import** the new config in `AdmissionsPage.jsx`:
   ```js
   import { SCHOOL_CONFIG } from "../config/schoolConfig"; // ← swap
   const config = SCHOOL_CONFIG;
   ```
4. **Done.** No component changes needed.

---

## Theme variants (preset palettes)

| Variant   | Primary    | Accent   | Best for               |
|-----------|-----------|----------|------------------------|
| royal     | #0f3460   | #e8a020  | Traditional CBSE       |
| forest    | #1a3d2b   | #5ecb7a  | Eco / Nature themed    |
| crimson   | #1e0a0a   | #e84040  | Bold, prestigious      |
| ocean     | #042a4a   | #00c4ff  | Modern, tech-forward   |
| slate     | #1c1f2e   | #a78bfa  | Contemporary           |
| navy      | #0a1628   | #facc15  | Classic, formal        |
| teal      | #0d2e2e   | #2dd4bf  | Wellness-focused       |
| charcoal  | #18181b   | #fb923c  | Startup/design school  |
| maroon    | #3b0a1a   | #f9a8d4  | Girls' school / arts   |
| indigo    | #1e1b4b   | #818cf8  | Tech / engineering     |

Or fully override with custom hex in `theme.primary` / `theme.accent`.

---

## Connecting to Firebase

In `useAdmissionForm.js`, replace the `await new Promise(...)` simulation:

```js
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase"; // your firebase init

// Inside handleSubmit:
await addDoc(collection(db, "admissions"), {
  ...values,
  schoolId: config.id,       // tag which school
  createdAt: serverTimestamp(),
  status: "pending",
});
```

---

## Adding to React Router

```jsx
import AdmissionsPage from "./admissions/pages/AdmissionsPage";

<Route path="/admissions" element={<AdmissionsPage />} />
```

---

## Sections rendered (in order)

1. Hero (badge · title · CTA · stats · image)
2. Admission Process (4-step flow)
3. Classes Available (card grid)
4. Important Dates (timeline list)
5. Fee Structure (table)
6. Required Documents (checklist)
7. Application Form (with validation)
8. FAQ (accordion)
9. Footer strip
