class HTMLWorker {
  static getSliderHtml(item,index,count) {
    return `
        <swiper-slide>
            <div class="slides" style="background-image:url('${item.imageSrc}');">
              <div class="max-w-sm rounded overflow-hidden shadow-lg card bg-white">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">${item.title}</div>
                    <h2>
                        ${item.description}
                    </h2>
                    <div class="px-6 pt-4 pb-2">
                        <div class="rounded ">${index}/${count}</div>
                    </div>
                </div>
            </div>
        </swiper-slide>`;
  }

  static getSideCard(){
    return ``;
  }

  static getMiddleCard(){
    return ``;
  }
}

class SliderItem{
    title;
    description;
    imageSrc;

    constructor(title, description, imageSrc){
        this.title = title;
        this.description = description;
        this.imageSrc = imageSrc;
    }
}

class CardItem {
    type;
    date;
    description;
    imageSrc;

    constructor(type,date, description, imageSrc){
        this.type = type;
        this.date = date;
        this.description = description;
        this.imageSrc = imageSrc;
    }
}

class ViewWorker {
  constructor() {
    this.renderSliderItems();
  }

  renderSliderItems() {
    var sliderImages = [
      new SliderItem('slider 1','description 1',"./sliders/Photo1.png"),
      new SliderItem('slider 2','description 2',"./sliders/Photo2.png"),
      new SliderItem('slider 3','description 3',"./sliders/Photo3.png"),
      new SliderItem('slider 4','description 4',"./sliders/Photo4.png")
    ];
    var slider = document.querySelector("swiper-container");
    sliderImages.forEach((item,index) => {
      slider.innerHTML += HTMLWorker.getSliderHtml(item,index+1,sliderImages.length);
    });
  }

  renderCardItems(){

  }
}



var viewWorker = new ViewWorker();
