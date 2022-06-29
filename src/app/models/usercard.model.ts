export class UserCard {
  constructor(
    public firstName: string,
    public age: number,
    public pictureSrc: string,
    public quote: string,
    public isPremium: boolean,
    public seriesList: string[]
  ){ }
}
