import { ParkingAvailabilityPage } from './app.po';

describe('parking-availability App', function() {
  let page: ParkingAvailabilityPage;

  beforeEach(() => {
    page = new ParkingAvailabilityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Parking Availability');
  });
});
