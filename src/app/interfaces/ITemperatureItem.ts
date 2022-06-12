export interface ITemperatureItem
{
    deviceId:Number,
    temperature:Array<Temp>
}


interface Temp {
    temp: Number;
    date: Date;
}