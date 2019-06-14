describe('cipher', () => {
  it('Debería ser un objeto.', () => {
    assert.equal(typeof cipher, 'object');
  });
  //Para Hacker edition
  describe('cipher.encode', () => {
    it('Debería ser una función.', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('Debería retornar ">?@ABCDEFGHIJKLMNOPQRSTUVW" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -3.', () =>{
      assert.equal(cipher.encode(-3,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), '>?@ABCDEFGHIJKLMNOPQRSTUVW');
    });
  });
  describe('cipher.decode', () => {
    it('Debería ser una función.', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('Debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para ">?@ABCDEFGHIJKLMNOPQRSTUVW" con offset -3.',() =>{
      assert.equal(cipher.decode(-3,'>?@ABCDEFGHIJKLMNOPQRSTUVW'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
  });


    //describe('cipher.encode', () => {
  //   it('Debería ser una función.', () => {
  //     assert.equal(typeof cipher.encode, 'function');
  //   });
  //   it('Debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33.', () =>{
  //     assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
  //   });
  // });
  // describe('cipher.decode', () => {
  //   it('Debería ser una función.', () => {
  //     assert.equal(typeof cipher.decode, 'function');
  //   });
  //   it('Debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33.',() =>{
  //     assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  //   });
  // });
})