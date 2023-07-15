import { figmaAPI } from "@/lib/figmaAPI";

export async function getTextOffset() {
  const bounding = await figmaAPI.run((figma) => {
    const { selection } = figma.currentPage;
    return selection.reduce(
      (acc, node) => {
        const boundingBox = node.absoluteBoundingBox;

        if (!boundingBox) {
          return acc;
        }

        return {
          top: Math.min(acc.top, boundingBox.y),
          right: Math.max(acc.right, boundingBox.x + boundingBox.width),
        };
      },
      { top: Infinity, right: -Infinity },
    );
  });

  if (bounding.top === Infinity || bounding.right === -Infinity) {
    return null;
  }

  return {
    x: bounding.right + 48,
    y: bounding.top,
  };
}
