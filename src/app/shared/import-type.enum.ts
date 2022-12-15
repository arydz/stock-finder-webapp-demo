export enum ImportType {
    MARKET = "Import stocks market data",
    CHART = "Import charts data"
}

export namespace ImportTypeRequest {

    export function getUrl(type: ImportType): string {
        switch (type) {
            case ImportType.MARKET:
              return 'stock/update/market';
            case ImportType.CHART:
              return 'chart/import';
            default:
              throw new Error("Unsupported import type");
          }
    }
}


