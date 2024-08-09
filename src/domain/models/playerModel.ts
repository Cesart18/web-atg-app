export interface PlayerModel {
    ID:                number;
    CreatedAt:         Date;
    UpdatedAt:         Date;
    DeletedAt:         null;
    name:              string;
    singlePoints:      number;
    doublePoints:      number;
    isMembershipValid: boolean;
    isPayedBalls:      boolean;
}
