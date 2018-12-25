export class SpeedComponent
{

    public speedX: number;
    public speedY: number;
    public speedZ: number;

    public constructor()
    {

    }

    public initialize( x: number = 0.0, y: number = 0.0, z: number = 0.0 )
    {
        this.speedX = x;
        this.speedY = y;
        this.speedZ = z;
    }
}