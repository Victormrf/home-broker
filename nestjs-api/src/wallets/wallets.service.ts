import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Wallet } from './entities/wallet.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletsService {
  constructor(@InjectModel(Wallet.name) private walletSchema: Model<Wallet>) {}

  create(CreateWalletDto: CreateWalletDto) {
    return this.walletSchema.create(CreateWalletDto);
  }

  findAll() {
    return this.walletSchema.find();
  }

  findOne(id: string) {
    return this.walletSchema.findById(id);
  }

  // update(id: number, updateWalletDto: UpdateWalletDto) {
  //   return `This action updates a #${id} wallet`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} wallet`;
  // }
}
