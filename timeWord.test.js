const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test("00:00 is midnight", () => {
    const result = timeWord("00:00");
    expect(result).toEqual("midnight");
  });

  test("00:12", () => {
    const result = timeWord("00:12");
    expect(result).toEqual("twelve twelve am");
  });

  test("01:00", () => {
    const result = timeWord("01:00");
    expect(result).toEqual("one o'clock am");
  });

  test("06:01", () => {
    const result = timeWord("06:01");
    expect(result).toEqual("six oh one am");
  });

  test("06:10", () => {
    const result = timeWord("06:10");
    expect(result).toEqual("six ten am");
  });

  test("06:18", () => {
    const result = timeWord("06:18");
    expect(result).toEqual("six eighteen am");
  });

  test("06:30", () => {
    const result = timeWord("06:30");
    expect(result).toEqual("six thirty am");
  });

  test("10:34", () => {
    const result = timeWord("10:34");
    expect(result).toEqual("ten thirty four am");
  });

  test("12:00 is noon", () => {
    const result = timeWord("12:00");
    expect(result).toEqual("noon");
  });

  test("12:09", () => {
    const result = timeWord("12:09");
    expect(result).toEqual("twelve oh nine pm");
  });

  test("23:23", () => {
    const result = timeWord("23:23");
    expect(result).toEqual("eleven twenty three pm");
  });

});