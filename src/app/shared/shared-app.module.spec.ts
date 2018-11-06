import { SharedAppModule } from './shared-app.module';

describe('SharedAppModule', () => {
  let sharedAppModule: SharedAppModule;

  beforeEach(() => {
    sharedAppModule = new SharedAppModule();
  });

  it('should create an instance', () => {
    expect(sharedAppModule).toBeTruthy();
  });
});
