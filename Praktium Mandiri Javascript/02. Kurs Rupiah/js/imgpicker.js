const images = document.querySelector(".images")
      let hasil = document.querySelector(".hasil")

      const daftarImages = {
        img1: "./galerry/1.jpeg",
        img2: "./galerry/2.jpeg",
        img3: "./galerry/3.jpeg",
        img4: "./galerry/4.jpeg",
        img5: "./galerry/5.jpeg",
        img6: "./galerry/6.jpeg",
        img7: "./galerry/7.jpeg",
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