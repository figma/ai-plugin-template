import { figmaAPI } from "@/lib/figmaAPI";

export async function getTextForSelection() {
  return await figmaAPI.run((figma) => {
    const { selection } = figma.currentPage;

    const getTextForNode = (node: SceneNode) => {
      if (node.type === "TEXT") {
        return node.characters;
      } else if (node.type === "STICKY" || node.type === "SHAPE_WITH_TEXT") {
        return node.text.characters;
      }
      return null;
    };

    const layers: string[] = [];

    for (const node of selection) {
      if ("findAllWithCriteria" in node) {
        const childText = node
          .findAllWithCriteria({
            types: ["TEXT", "STICKY", "SHAPE_WITH_TEXT"],
          })
          .map(getTextForNode)
          .filter((t): t is string => t !== null);
        layers.push(...childText);
      }
      const text = getTextForNode(node);
      if (text !== null) {
        layers.push(text);
      }
    }

    return layers;
  });
}
