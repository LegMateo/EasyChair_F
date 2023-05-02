<template>
  <div class="col-lg-6">
    <div class="text-center card-box h-100">
      <div class="member-card pt-2 pb-2">
        <div class="thumb-lg member-thumb mx-auto">
          <img
            src="@/assets/profile_image.png"
            class="rounded-circle img-thumbnail"
            alt="profile-image"
          />
        </div>

        <div class="">
          <h4>{{ users.id.name }}</h4>
        </div>
        <ul>
          <li
            class="list-inline-item"
            style="width: 30%; margin-left: auto; margin-right: auto"
          >
            <p class="text-muted info">
              username <span>| </span
              ><span
                ><a href="#" class="text-pink">{{ users.id.username }}</a></span
              >
            </p>
          </li>

          <li
            class="list-inline-item"
            style="width: 40%; margin-left: auto; margin-right: auto"
          >
            <p class="text-muted info">
              password <span>| </span
              ><span><a href="#" class="text-pink">*******</a></span>
            </p>
          </li>
        </ul>
        <ul class="social-links list-inline">
          <li class="list-inline-item">
            <button type="button" class="btn btn-light">
              <i class="bi bi-pen"></i> Username
            </button>
          </li>
          <li class="list-inline-item">
            <button type="button" class="btn btn-light">
              <i class="bi bi-pen"></i> Password
            </button>
          </li>
        </ul>
        <button
          type="button"
          class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
        >
          <span class="bi bi-trash-fill"></span>
          Delete user
        </button>
        <div class="mt-4">
          <div class="row" style="padding-bottom: 10px">
            <div class="col-4">
              <div class="mt-3">
                <p class="mb-0 text-muted">1 Day Reservations</p>
                <h4>{{ users.one }}</h4>
              </div>
            </div>
            <div class="col-4">
              <div class="mt-3">
                <p class="mb-0 text-muted">3 Day Reservations</p>
                <h4>{{ users.three }}</h4>
              </div>
            </div>
            <div class="col-4">
              <div class="mt-3">
                <p class="mb-0 text-muted">7 Day reservations</p>
                <h4>{{ users.seven }}</h4>
              </div>
            </div>
          </div>
          <div class="row" style="padding-bottom: 10px">
            <div class="col-4">
              <div class="mt-3">
                <p class="mb-0 text-muted">Total Days Reserved</p>
                <h4>{{ users.chairs }}</h4>
              </div>
            </div>
            <div class="col-4">
              <div class="mt-3">
                <p class="mb-0 text-muted">Total Chairs Reserved</p>
                <h4>{{ users.chairs }}</h4>
              </div>
            </div>
            <div class="col-4">
              <div class="mt-3">
                <p class="mb-0 text-muted">Total Earnings</p>
                <h4>{{ users.total }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["users"],
  name: "Cashiers",
};
</script>
