import { DummyModule } from './dummy.module';

describe('DummyModule', () => {
  let dummyModule: DummyModule;

  beforeEach(() => {
    dummyModule = new DummyModule();
  });

  it('should create an instance', () => {
    expect(dummyModule).toBeTruthy();
  });
});
