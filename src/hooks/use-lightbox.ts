import { useState } from "react";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export const LIGHTBOX_PLUGINS = [Fullscreen, Zoom];

export function useLightbox() {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
}
