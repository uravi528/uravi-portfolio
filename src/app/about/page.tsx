import { redirect } from "next/navigation";

// About now lives as a section on the home page (see AboutSection).
// This route stays only so old links/bookmarks still land somewhere sensible.
export default function AboutRedirect() {
  redirect("/#about");
}
