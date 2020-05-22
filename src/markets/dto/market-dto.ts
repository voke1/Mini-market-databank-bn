export class CreateMarketDto {
  readonly id?: string;
  readonly name: string;
  readonly description: string;
  readonly location: string;
  readonly foodCategory: string;
  readonly image: string;
  readonly date: Date;
}
