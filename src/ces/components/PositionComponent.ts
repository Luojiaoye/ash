export class PositionComponent {

    public posX: number;
    public posY: number;
    public posZ: number;

    public constructor()  {

    }

    public initialize(x: number = 0.0, y: number = 0.0, z: number = 0.0)  {
        this.posX = x;
        this.posY = y;
        this.posZ = z;
    }
}