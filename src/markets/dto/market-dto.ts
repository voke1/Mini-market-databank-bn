export class CreateMarketDto {
  readonly id?: string;
  readonly name: string;
  readonly description: string;
  readonly locations: string;
  readonly foodCategory: string;
  readonly image: string;
  readonly date: Date;
}
