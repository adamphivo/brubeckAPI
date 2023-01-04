import { getNodeStats } from "./getNodeStats";
import { watchNode } from "./watchNode";
import { unwatchNode } from "./unwatchNode";
import { updateNodeName } from "./updateNodeName";

const nodeService = () => {};

nodeService.getNodeStats = getNodeStats;
nodeService.watchNode = watchNode;
nodeService.unwatchNode = unwatchNode;
nodeService.updateNodeName = updateNodeName;

export { nodeService };
