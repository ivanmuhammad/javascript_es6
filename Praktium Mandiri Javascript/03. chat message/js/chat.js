const kirim = document.getElementById("kirim");
        const isi1 = document.getElementById("isi1");
        const input = document.getElementById("textinput");

        kirim.onclick = function(){
            const isi = input.value;
            if (isi) {
                isi1.innerHTML += isi + '<br>';
                
            }
            input.value = ''
        }