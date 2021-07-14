import { Greeter } from '../src/Greeter';

test('My Greeter', () => {
  expect(Greeter.getVersion()).toBe('Main version');
});