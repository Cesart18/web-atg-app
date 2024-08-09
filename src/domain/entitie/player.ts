interface PlayerConstructorParams {
    id: number;
    name: string;
    singlePoints: number;
    doublePoints: number;
    isMembershipValid: boolean;
    isPayedBalls: boolean;
    lastUpdated: Date;
  }
  
  export class Player {
    id: number;
    name: string;
    singlePoints: number;
    doublePoints: number;
    isMembershipValid: boolean;
    isPayedBalls: boolean;
    lastUpdated: Date;
  
    constructor({ id, name, singlePoints, doublePoints, isMembershipValid, isPayedBalls, lastUpdated }: PlayerConstructorParams) {
      this.id = id
      this.name = name;
      this.singlePoints = singlePoints;
      this.doublePoints = doublePoints;
      this.isMembershipValid = isMembershipValid;
      this.isPayedBalls = isPayedBalls;
      this.lastUpdated = lastUpdated;
    }
  }