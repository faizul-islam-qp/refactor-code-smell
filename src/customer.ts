import { CustomerTypeEnum } from "./enums/customerTypeEnum";
export class Customer {
  name: string;
  type: CustomerTypeEnum;
  discount: number;

  constructor(name: string, type: CustomerTypeEnum) {
    this.name = name;
    this.type = type;
    this.setDiscount();
  }

  setDiscount(): void {
    if (this.type === CustomerTypeEnum.Regular) {
      this.discount = 0.05;
    } else if (this.type === CustomerTypeEnum.Premium) {
      this.discount = 0.1;
    } else if (this.type === CustomerTypeEnum.VIP) {
      this.discount = 0.2;
    } else {
      this.discount = 0;
    }
  }
}
