const preset = require('../jest-preset.json');

describe('Preset', () => {

    it('should define coverage report', () => {
        expect(preset.collectCoverage).toBe(true);
    });

    it('should define global coverage thresholds', () => {
        const threshold = 90;

        expect(preset.coverageThreshold.global.branches).toBe(threshold);
        expect(preset.coverageThreshold.global.functions).toBe(threshold);
        expect(preset.coverageThreshold.global.lines).toBe(threshold);
        expect(preset.coverageThreshold.global.statements).toBe(threshold);
    });

});