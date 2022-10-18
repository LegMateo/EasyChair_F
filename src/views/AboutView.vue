<template>
  <div class="container">
    <div class="row">
      <div
        class="colh-75 d-inline-block"
        style="width: 50%; height:50% background-color: rgba(0, 0, 255, 0.1)">
        Height 75% Column
      </div>
      <div class="col">Column</div>
      <div class="w-100"></div>
      <div class="col">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://picsum.photos/201"
                alt="First slide" />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://picsum.photos/202"
                alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://picsum.photos/203"
                alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
