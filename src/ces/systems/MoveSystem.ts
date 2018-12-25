import { ListIteratingSystem } from "ash.ts";
import { MoveNode } from "../nodes/MoveNode";

export class MoveSystem extends ListIteratingSystem<MoveNode>{
	constructor() {
		super(MoveNode);
	}

	public updateNode( node: MoveNode, delta: number ): void { 
		node.pos.posX += node.speed.speedX;
		console.log("x: " + node.pos.posX);
	}
}