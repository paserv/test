import { Greeter } from '../src/Greeter';
import { Common } from 'common';

test('My Greeter', () => {
    expect(Greeter.getVersion()).toBe('Main version');
});

test('Common', () => {
    expect(Common.getVersion()).toBe('Branch version');
});