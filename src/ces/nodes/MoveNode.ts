import { Node, keep } from "ash.ts";
import { PositionComponent } from "../components/PositionComponent";
import { SpeedComponent } from "../components/SpeedComponent";
export class MoveNode extends Node<MoveNode>
{
    @keep(PositionComponent)
    public pos: PositionComponent;
    @keep(SpeedComponent)
    public speed: SpeedComponent;
}