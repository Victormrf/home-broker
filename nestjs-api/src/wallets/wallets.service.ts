import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Wallet } from './entities/wallet.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { WalletAsset } from './entities/wallet-asset.entity';
// import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(Wallet.name) private walletSchema: Model<Wallet>,
    @InjectModel(WalletAsset.name)
    private walletAssetSchema: Model<WalletAsset>,
  ) {}

  create(CreateWalletDto: CreateWalletDto) {
    return this.walletSchema.create(CreateWalletDto);
  }

  findAll() {
    return this.walletSchema.find();
  }

  findOne(id: string) {
    return this.walletSchema.findById(id);
  }

  createWalletAsset(data: {
    walletId: string;
    assetId: string;
    shares: number;
  }) {
    return this.walletAssetSchema.create({
      wallet: data.walletId,
      asset: data.assetId,
      shares: data.shares,
    });
  }

  // update(id: number, updateWalletDto: UpdateWalletDto) {
  //   return `This action updates a #${id} wallet`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} wallet`;
  // }
}
