import { lazy } from "react";

export const templateRegistry = {
  coachingTemplate1: lazy(() =>
    import("./coaching/coachingTemplate1/routes/CoachingTemplate1Routes")
  ),

  schoolTemplate1: lazy(() =>
    import("./school/schoolTemplate1/routes/SchoolTemplate1Routes")
  ),

  schoolTemplate2: lazy(() =>
    import("./school/schoolTemplate2/routes/SchoolTemplate2Routes")  // ✅ fixed
  ),
};