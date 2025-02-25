import { Customer } from "./customer";
import { CustomerTypeEnum } from "./enums/customerTypeEnum";
import { Order } from "./order";

class OrderManagementSystem {
  static main(): void {
    const customer = OrderManagementSystem.createCustomer();
    const order = OrderManagementSystem.createOrder(customer);
    OrderManagementSystem.addOrderItems(order);

    order.printOrder();

    OrderManagementSystem.generateInvoice(order);
  }

  static createCustomer(): Customer {
    return new Customer("John Doe", CustomerTypeEnum.VIP);
  }

  static createOrder(customer: Customer): Order {
    return new Order(customer);
  }

  static addOrderItems(order: Order): void {
    order.addItem("Laptop", 1000);
    order.addItem("Mouse", 50);
    order.addItem("Keyboard", 80);
  }

  static generateInvoice(order: Order): void {
    console.log("Generating Invoice...");
    console.log(`Customer: ${order.customer.name}`);
    console.log(`Total: $${order.totalPrice}`);
    console.log(`Discounted Total: $${order.discountedPrice}`);
    console.log(`Items: ${order.items.join(", ")}`);
    console.log("Thank you for shopping with us!");
  }
}
