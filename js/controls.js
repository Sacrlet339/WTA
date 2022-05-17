class Slider {
    constructor() {
      this.slide = document.getElementsByClassName("slide");
      this.nav = document.getElementsByClassName("carousel__button");
      this.next = document.getElementById("next");
      this.prev = document.getElementById("prev");
      this.nbr = this.slide.length;
      this.nbrClick = 0;
      console.log(this.nbrClick, (this.nbrClick - 1), (this.nbrClick - 2));
      if(screen.width <= 600){
        console.log('mobile')
      }
    }
  
    click() {
        
      this.next.addEventListener("click", () => {
        this.nbrClick++;
        if (this.nbrClick > this.nbr) {
          this.nbrClick = 1;
        }
        for (let i = 0; i < this.nbr; i++) {
              this.slide[i].classList.add('animate__animated', 'animate__slideOutLeft');
              this.slide[i].classList = "slide animate__slideOutLeft hidden";
              this.nav[i].classList = "carousel__button";
        }

            this.slide[this.nbrClick % this.nbr].classList = "slide left";
            this.slide[(this.nbrClick + 1) % this.nbr].classList = "slide center";
            //nav
            this.nav[this.nbrClick % this.nbr].classList = "carousel__button carousel__button--selected";
            this.nav[(this.nbrClick + 1) % this.nbr].classList = "carousel__button carousel__button--selected";

            if(screen.width >= 600){
                this.slide[(this.nbrClick + 2) % this.nbr].classList = "slide right";
                this.nav[(this.nbrClick + 2) % this.nbr].classList = "carousel__button carousel__button--selected";
            }

      });
  
      this.prev.addEventListener("click", () => {
          this.nbrClick--;
          for (let i = 0; i < this.nbr; i++) {
            this.slide[i].classList.add('animate__animated', 'animate__slideOutLeft');
            this.slide[i].classList = "slide animate__slideOutLeft hidden";
            this.nav[i].classList = "carousel__button";
          }
          console.log(this.nbrClick, (this.nbrClick - 1), (this.nbrClick - 2));
          if((this.nbrClick) < 0){
            this.nbrClick = this.nbr;
          }
            this.slide[(this.nbrClick) % this.nbr].classList = "slide left";
           this.nav[(this.nbrClick) % this.nbr].classList = "carousel__button carousel__button--selected";
          

          if((this.nbrClick - 1) < 0){
            this.nbrClick = this.nbr;
            this.slide[(this.nbr -1) % this.nbr].classList = "slide center";
            this.nav[(this.nbr -1) % this.nbr].classList = "carousel__button carousel__button--selected";
          }else{
            this.slide[(this.nbrClick - 1) % this.nbr].classList = "slide center";
            this.nav[(this.nbrClick - 1) % this.nbr].classList = "carousel__button carousel__button--selected";
          }


          if(screen.width >= 600){
            if((this.nbrClick - 2) < 0){
              console.log('*',this.nbr -2);
              this.slide[this.nbr -1].classList = "slide right";
              this.nav[this.nbr-1].classList = "carousel__button carousel__button--selected";
            }else{
              this.slide[(this.nbrClick - 2)% this.nbr].classList = "slide right";
              this.nav[(this.nbrClick - 2)% this.nbr].classList = "carousel__button carousel__button--selected";
            }
            
          }
      });


    }
    bottomNav(x){
      console.log('i got called', x);
      this.nbrClick = x;

      for (let i = 0; i < this.nbr; i++) {
        this.slide[i].classList.add('animate__animated', 'animate__slideOutLeft');
        this.slide[i].classList = "slide animate__slideOutLeft hidden";
        this.nav[i].classList = "carousel__button";
      }

      this.slide[(this.nbrClick) % this.nbr].classList = "slide left";
      this.nav[(this.nbrClick) % this.nbr].classList = "carousel__button carousel__button--selected";
      
      if ((this.nbrClick+1) > this.nbr) {
          this.nbrClick = 1;
          
          this.slide[(this.nbrClick) % this.nbr].classList = "slide center";
          this.nav[(this.nbrClick) % this.nbr].classList = "carousel__button carousel__button--selected";
      }else{
          this.slide[(this.nbrClick + 1) % this.nbr].classList = "slide center";
          this.nav[(this.nbrClick + 1) % this.nbr].classList = "carousel__button carousel__button--selected";
      }

      if(screen.width >= 600){
        if ((this.nbrClick+2) > this.nbr) {
          this.nbrClick = 1;
          this.slide[(this.nbrClick) % this.nbr].classList = "slide right";
          this.nav[(this.nbrClick) % this.nbr].classList = "carousel__button carousel__button--selected";
        }else{
          this.slide[(this.nbrClick + 2) % this.nbr].classList = "slide center";
          this.nav[(this.nbrClick + 2) % this.nbr].classList = "carousel__button carousel__button--selected";
        }
      }

    }
  }

  
  let slider = new Slider();
  window.addEventListener('resize', function(event){
    console.log('resize');
  });
  slider.click();