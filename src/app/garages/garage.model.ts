export class Garage {
  id: string;
  name: string;
  longCapacity: number;
  shortCapacity: number;
  freeSpaceLong: number;
  freeSpaceShort: number;
  coords: { lat: string, lon: string; };

  constructor(garage) {
    const garageData = garage.properties.layers['parking.garage'].data;

    this.id = this.getId(garage.properties.cdk_id, garage.properties.layer);
    this.name = garageData.Name || '';
    this.longCapacity = garageData.LongCapacity || 0;
    this.shortCapacity = garageData.ShortCapacity || 0;
    this.freeSpaceLong = garageData.FreeSpaceLong || 0;
    this.freeSpaceShort = garageData.FreeSpaceShort || 0;
    this.coords = {
      lat: garage.geometry.coordinates[0] || '',
      lon: garage.geometry.coordinates[1] || ''
    };
  }

  private getId(cdk_id, layer) {
    return cdk_id.replace(layer + '.', '');
  }
}

