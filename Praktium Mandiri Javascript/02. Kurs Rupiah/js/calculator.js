function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function hitungKurs() {
    let idr = document.getElementById("idr").value;

    console.log(idr);
    let kurs = document.getElementById("kurs").value;
    switch (kurs) {
      case "usd":
        document.getElementById("hasil").value = `Rp ${numberWithDots(
          parseFloat(idr) * 9915
        )},-`;
        break;
      case "sgd":
        document.getElementById("hasil").value = `Rp ${numberWithDots(
          parseFloat(idr) * 13472
        )},-`;
        break;
      case "myr":
        document.getElementById("hasil").value = `Rp ${numberWithDots(
          parseFloat(idr) * 875
        )},-`;
        break;
      case "jpy":
        document.getElementById("hasil").value = `Rp ${numberWithDots(
          parseFloat(idr) * 120
        )},-`;
        break;
      case "eur":
        document.getElementById("hasil").value = `Rp ${numberWithDots(
          parseFloat(idr) * 15888
        )},-`;
        break;
      case "sar":
        document.getElementById("hasil").value = `Rp ${numberWithDots(
          parseFloat(idr) * 3592
        )},-`;
        break;
      default:
        break;
    }
  }