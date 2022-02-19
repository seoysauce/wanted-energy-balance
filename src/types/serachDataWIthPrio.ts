export interface SearchDataWithPrio {
  properties: {
    product: string;
    tags?: Array<string>;
    brand?: string;
    disassemble: Array<string>;
    index: number;
    priority: number;
  };
}
