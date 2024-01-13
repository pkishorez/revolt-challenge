import { getMetadata } from "../../scripts/aem.js";
import { loadFragment } from "../fragment/fragment.js";

/**
 * Decorates the Revolt footer block.
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  Array.from(block.children).forEach((row) => {
    const [title, content] = row.children;

    const pictureElem = title.querySelector("picture");
    title.classList.add("section-title");
    content.classList.add("section-content");

    if (pictureElem) {
      row.classList.add("comm-section");
    } else {
      row.classList.add("link-section");
    }
  });
}
