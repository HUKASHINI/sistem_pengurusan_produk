describe('Ujian Sistem Pengurusan Produk', () => {

  // Buka website sebelum setiap test
  beforeEach(() => {
    cy.visit('http://localhost:5500'); // pastikan Live Server ON
  });

  // =========================
  // ✅ UJIAN PAPARAN
  // =========================
  it('Ujian Paparan', () => {

    // Check tajuk sistem
    cy.contains('Sistem Pengurusan Produk').should('be.visible');

    // Check jadual wujud
    cy.get('table').should('exist');

  });


  // =========================
  // ✅ UJIAN BORANG
  // =========================
  it('Ujian Borang', () => {

    // Tunggu input muncul
    cy.get('#nama', { timeout: 10000 }).should('be.visible');

    // Isi borang
    cy.get('#nama').type('Produk Test');
    cy.get('#kategori').type('Test');
    cy.get('#harga').type('100');

    // Klik button Tambah
    cy.contains('Tambah').click();

    // Check data masuk dalam table
    cy.contains('Produk Test').should('exist');

  });


  // =========================
  // ✅ UJIAN HAPUS
  // =========================
  it('Ujian Hapus', () => {

    // Tunggu data dari API load (button Hapus muncul)
    cy.contains('Hapus', { timeout: 10000 }).should('be.visible');

    // Klik butang Hapus pertama
    cy.contains('Hapus').first().click();

    // (Optional) confirm dialog auto accept
    cy.on('window:confirm', () => true);

  });

});