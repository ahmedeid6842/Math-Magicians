import operate from '../../logic/operate';

describe('operate', () => {
  it('should add two numbers', () => {
    const result = operate('5', '3', '+');
    expect(result).toBe('8');
  });

  it('should subtract two numbers', () => {
    const result = operate('5', '3', '-');
    expect(result).toBe('2');
  });

  it('should multiply two numbers', () => {
    const result = operate('5', '3', 'x');
    expect(result).toBe('15');
  });

  it('should divide two numbers', () => {
    const result = operate('6', '3', '÷');
    expect(result).toBe('2');
  });

  it('should handle division by zero', () => {
    const result = operate('6', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should compute the modulo of two numbers', () => {
    const result = operate('7', '3', '%');
    expect(result).toBe('1');
  });

  it('should handle modulo by zero', () => {
    const result = operate('7', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate('5', '3', '#')).toThrow("Unknown operation '#'");
  });
});
