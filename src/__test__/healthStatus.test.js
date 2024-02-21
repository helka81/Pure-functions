import healthStatus from '../index';

const testData = [
    { character: { name: 'Маг', health: 90 }, expectedStatus: 'healthy' },
    { character: { name: 'Маг', health: 30 }, expectedStatus: 'wounded' },
    { character: { name: 'Маг', health: 10 }, expectedStatus: 'critical' }
];

test.each(testData)('character %p should have status %p', ({ character, expectedStatus }) => {
    expect(healthStatus(character)).toBe(expectedStatus);
});