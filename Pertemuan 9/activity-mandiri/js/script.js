var iName;
var iEmail;
var iPesan;

// Minta input dari user
iName = prompt("Masukkan Nama Anda.", "");
iEmail = prompt("Masukkan Email Anda.", "");
iPesan = prompt("Masukkan Pesan.", "");

// Regular expression untuk validasi email
var emailRegex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

// Cek kondisi input kosong
if (iPesan == "") {
  alert("Anda belum memasukkan pesan");
  if (iName == "") {
    alert("Anda belum memasukkan nama");
  } else if (iEmail == "") {
    alert("Anda belum memasukkan email");
  } else {
    alert("Anda belum memasukkan nama");
    alert("Anda belum memasukkan email");
  }
} else if (iEmail == "") {
  alert("Anda belum memasukkan email");
  if (iName == "") {
    alert("Anda belum memasukkan nama");
  } else if (iPesan == "") {
    alert("Anda belum memasukkan pesan");
  } else {
    alert("Anda belum memasukkan nama");
    alert("Anda belum memasukkan pesan");
  }
} else if (iName == "") {
  alert("Anda belum memasukkan nama");
  if (iPesan == "") {
    alert("Anda belum memasukkan pesan");
  } else if (iEmail == "") {
    alert("Anda belum memasukkan email");
  } else {
    alert("Anda belum memasukkan pesan");
    alert("Anda belum memasukkan email");
  }
} else {
  // Jika semua sudah diisi, cek format email
  if (!emailRegex.test(iEmail)) {
    alert("Format email tidak valid!");
  } else {
    alert("Semua data valid! Terima kasih, " + iName + ".");
  }
}
