import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { OrdersService } from './orders.service';
import { OrderType } from './entities/order.entity';

@WebSocketGateway()
export class OrdersGateway {
  constructor(private orderSerrvice: OrdersService) {}
  @SubscribeMessage('orders/create')
  async handleMessage(
    client: any,
    payload: {
      assetId: string;
      walletId: string;
      type: OrderType;
      shares: number;
      price: number;
    },
  ) {
    const order = await this.orderSerrvice.create({
      assetId: payload.assetId,
      walletId: payload.walletId,
      type: payload.type,
      shares: payload.shares,
      price: payload.price,
    });

    return order;
  }
}
