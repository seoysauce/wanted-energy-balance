export interface SearchData {
  properties: {
    product: string;
    tags?: Array<string>;
    brand?: string;
    disassemble: Array<string>;
    index: number;
  };
}
