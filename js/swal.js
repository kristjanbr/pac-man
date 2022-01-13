var oglasi = new Array(6);
oglasi[0]="https://www.youtube.com/watch?v=SJqEfdGzunA";
oglasi[1]="https://www.youtube.com/watch?v=i5Amt4ecYBE";
oglasi[2]="https://www.youtube.com/watch?v=kmkjGPgMwhw";
oglasi[3]="https://www.youtube.com/watch?v=vGJZvhDh5ts";
oglasi[4]="https://www.youtube.com/watch?v=cUofaxVXU-g";
oglasi[5]="https://www.youtube.com/watch?v=WYZaD3iiWGU";

function watchAd(){
    var a=oglasi[Math.floor(Math.random() * 6)];
    
    Swal.fire({
        title: 'Do you want to see an ad?',
        text: "You will get one token per ad!",
        iconHtml: '<img src="/img/dollar.png">', // OKAY...
        customClass: {
            icon: 'no-border',
            confirmButton: 'no-border',
            cancelButton: 'no-border'
          },
        showCancelButton: true,
        confirmButtonColor: '#ffa801',
        cancelButtonColor: '#485460',
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(a);
          var tkn=parseInt(localStorage.getItem("tokens"));
          tkn++;
          localStorage.setItem("tokens", tkn.toString());

          var coins=document.getElementById('coins');
          var grm="TOKENS";
          if(tkn==1)
            grm="TOKEN"
          coins.innerHTML="YOU HAVE: "+tkn+" "+grm+"!";

          var playbtn = document.getElementById('playbtn');
          if(tkn>0){
            playbtn.disabled =false;
            playbtn.className = "nes-btn is-warning";
        }
        }
      })

}
function about(){
    Swal.fire({
        icon: 'info',
        title:'About',
        text: 'Website made by Kristjan Brataševec, 4. RA, 2022',
        confirmButtonColor: '#485460',
        footer: "PAC-MAN is a trademark of Bandai Namco."
      })

}