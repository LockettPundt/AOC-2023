interface Node {
  branches: string[];
  key: string;
}

enum InstructionsLegend {
  R = 1,
  L = 0,
}

export const hauntedWasteland = (data: string[]) => {
  const [instructionsString, , ...nodeStrings] = data;
  const instructions = instructionsString.split(``);
  const nodes = nodeStrings.reduce((obj: Record<string, Node>, nodeStr) => {
    const [node, ...branches] = nodeStr.match(/[A-Z]{3}/g) ?? [];
    if (node) {
      obj[node] = {
        key: node,
        branches,
      };
    }
    return obj;
  }, {});

  return findSteps({
    numberOfSteps: 0,
    nodeKey: `AAA`,
    nodes,
    instructions,
  });
};

const findSteps = ({
  numberOfSteps,
  nodeKey,
  nodes,
  instructions,
}: {
  numberOfSteps: number;
  nodeKey: string;
  nodes: Record<string, Node>;
  instructions: string[];
}) => {
  let currentNode = nodeKey;
  for (let i = 0; i < instructions.length; i++) {
    const direction: number = InstructionsLegend[instructions[i]];
    const node = nodes[currentNode];
    const nextNode = node.branches[direction];

    if (nextNode === `ZZZ`) {
      return numberOfSteps + i + 1;
    }

    currentNode = nextNode;

    if (i === instructions.length - 1) {
      return findSteps({
        nodeKey: currentNode,
        nodes,
        numberOfSteps: numberOfSteps + i + 1,
        instructions,
      });
    }
  }
};
