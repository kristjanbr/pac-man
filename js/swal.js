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
        iconHtml: '<img src="../img/dollar.png">', // OKAY...
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
        }
      })

}
function about(){
    Swal.fire({
        icon: 'info',
        text: 'Website made by Kristjan Brataševec, 4.RA',
        confirmButtonColor: '#485460',
      })

}