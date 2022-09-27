/* eslint-disable @typescript-eslint/no-explicit-any */

import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let component: ShellComponent;

  beforeEach(() => {
    const mockFacade = {} as any;
    component = new ShellComponent(mockFacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
