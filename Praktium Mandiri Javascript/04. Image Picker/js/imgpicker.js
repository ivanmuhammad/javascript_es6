const images = document.querySelector(".images")
      let hasil = document.querySelector(".hasil")

      const daftarImages = {
        img1: "img/One Piece.png",
        img2: "img/Lufy.png",
        img3: "img/Zoro.jpg",
        img4: "img/Sanji.jpg",
        img5: "img/Shanks.png",
        img6: "img/Ushop.jpg",
        img7: "img/Kaido.jpg",
      };

      const {
        img1, img2, img3, img4, img5, img6, img7
      } = daftarImages;

      images.addEventListener("change", () => {
        for (const i in daftarImages) {
          if (images.value == i)
            alert(`Gambar ${daftarImages[i]}`),
            hasil.innerHTML = `<img src="${daftarImages[i]}" />`;
        }
      });