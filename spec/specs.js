describe('translator', function() {
  it("adds 'ay' to words that start with a vowel", function() {
    expect(translator("are")).to.equal("areay");
  });
});
