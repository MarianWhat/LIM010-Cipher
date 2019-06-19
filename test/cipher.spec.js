describe('cipher', () => {
  it('Debería ser un objeto.', () => {
    assert.equal(typeof cipher, 'object');
  });
  describe('cipher.encode', () => {
    it('Debería ser una función.', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('Debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33.', () =>{
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
<<<<<<< HEAD
    });
    it('Debería retornar "hijklmnopqrstuvwxyzabcedfg" para "abcdefghijklmnopqrstuvxwyz" con offset 33.', () =>{
      assert.equal(cipher.encode(33,'abcdefghijklmnopqrstuvxwyz'), 'hijklmnopqrstuvwxyzabcedfg');
    });
    it('Debería retornar "3456789012" para "0123456789" con offset 33.', () =>{
      assert.equal(cipher.encode(33,'0123456789'), '3456789012');
    });
    it('Debería retornar "| B,/ -`!É~[?" para "{/U+./,] ¨}^:" con offset 33.', () =>{
      assert.equal(cipher.encode(33,'{/U+./,] ¨}^:'), '| B,/ -`!É~[?');
    });
    it('Debería retornar "tuv123456/`" para "abc456789 ]" con offset -33.', () =>{
      assert.equal(cipher.encode(-33,'abc456789 ]'), 'tuv123456/`');
=======
>>>>>>> 9438e0d823ad172092bd6726382ebc3ba078de27
    });
  });
  describe('cipher.decode', () => {
    it('Debería ser una función.', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('Debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33.',() =>{
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
<<<<<<< HEAD
    });
    it('Debería retornar "abcdefghijklmnopqrstuvxwyz" para "hijklmnopqrstuvwxyzabcedfg" con offset 33.', () =>{
      assert.equal(cipher.decode(33,'hijklmnopqrstuvwxyzabcedfg'), 'abcdefghijklmnopqrstuvxwyz');
    });
    it('Debería retornar "0123456789" para "3456789012" con offset 33.', () =>{
      assert.equal(cipher.decode(33,'3456789012'), '0123456789');
    });
    it('Debería retornar "{/U+./,] ¨}^:" para "| B,/ -`!É~[?" con offset 33.', () =>{
      assert.equal(cipher.decode(33,'| B,/ -`!É~[?'), '{/U+./,] ¨}^:');
    });
    it('Debería retornar "abc456789 ]" para "tuv123456/`" con offset -33.', () =>{
      assert.equal(cipher.decode(-33,'tuv123456/`'), 'abc456789 ]');
=======
>>>>>>> 9438e0d823ad172092bd6726382ebc3ba078de27
    });
  });
})