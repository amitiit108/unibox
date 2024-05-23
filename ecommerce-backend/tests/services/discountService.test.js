const DiscountService = require('../../services/discountService');

describe('DiscountService', () => {
  test('generateDiscountCode should generate a new discount code', () => {
    const code = DiscountService.generateDiscountCode();
    expect(code).toMatch(/DISCOUNT[A-Z0-9]{5}/);
  });

  test('useDiscountCode should validate and use a discount code', () => {
    const code = DiscountService.generateDiscountCode();
    expect(DiscountService.useDiscountCode(code)).toBe(true);
    expect(DiscountService.useDiscountCode(code)).toBe(false);
  });

  test('getDiscountStats should return all discount codes and their usage', () => {
    const code = DiscountService.generateDiscountCode();
    DiscountService.useDiscountCode(code);
    const stats = DiscountService.getDiscountStats();
    expect(stats).toContainEqual({ code, isUsed: true });
  });
});
