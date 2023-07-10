<template>
  <div>
    <Navigation v-for="value in name" :key="value" :beach="value" />
  </div>

  <div class="container-fluid">
    <div class="imgbk">
      <div class="row justify-content-start" style="margin-bottom: 4vh"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="padding-left: 11%">
            <label class="id">500</label>
            <DisableButton
              :disabled="isParasolDisabled(500)"
              @click="btnid(500)"
              :class="{ 'disabled-button': isParasolDisabled(500) }"
              @mouseenter="showDisabledDuration(500, $event)"
              @mouseleave="hideDisabledDuration()"
            />

            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 500 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal500"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Reserved</h5>
                  </div>
                  <div class="modal-body">
                    <p>{{ dateBegin }} - {{ dateEnd }}</p>
                    <p>{{ guestName }} {{ guestLast }}</p>
                    <p>
                      {{ RoomNB }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-1 sun" style="margin-left: 13%">
            <label class="id">484</label>
            <DisableButton
              :disabled="isParasolDisabled(484)"
              @click="btnid(484)"
              :class="{ 'disabled-button': isParasolDisabled(484) }"
              @mouseenter="showDisabledDuration(484, $event)"
              @mouseleave="hideDisabledDuration()"
            />

            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 484 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal484"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Reserved</h5>
                  </div>
                  <div class="modal-body">
                    <p>{{ dateBegin }} - {{ dateEnd }}</p>
                    <p>{{ guestName }} {{ guestLast }}</p>
                    <p>
                      {{ RoomNB }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-5 sun" style=""></div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="padding-left: 15%">
            <label class="id">499</label>
            <DisableButton
              :disabled="isParasolDisabled(499)"
              @click="btnid(499)"
              :class="{ 'disabled-button': isParasolDisabled(499) }"
              @mouseenter="showDisabledDuration(499, $event)"
              @mouseleave="hideDisabledDuration()"
            />

            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 499 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal499"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Reserved</h5>
                  </div>
                  <div class="modal-body">
                    <p>{{ dateBegin }} - {{ dateEnd }}</p>
                    <p>{{ guestName }} {{ guestLast }}</p>
                    <p>
                      {{ RoomNB }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1 sun" style="margin-left: 14%">
            <label class="id">485</label>
            <DisableButton
              :disabled="isParasolDisabled(485)"
              @click="btnid(485)"
              :class="{ 'disabled-button': isParasolDisabled(485) }"
              @mouseenter="showDisabledDuration(485, $event)"
              @mouseleave="hideDisabledDuration()"
            />

            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 485 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal485"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Reserved</h5>
                  </div>
                  <div class="modal-body">
                    <p>{{ dateBegin }} - {{ dateEnd }}</p>
                    <p>{{ guestName }} {{ guestLast }}</p>
                    <p>
                      {{ RoomNB }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-5 sun" style=""></div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="padding-left: 20%">
            <label class="id">498</label>
            <DisableButton
              :disabled="isParasolDisabled(498)"
              @click="btnid(498)"
              :class="{ 'disabled-button': isParasolDisabled(498) }"
              @mouseenter="showDisabledDuration(498, $event)"
              @mouseleave="hideDisabledDuration()"
            />

            <div
              class="modal modal-position"
              :class="{ 'show-modal': showDuration && activeButton === 498 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal498"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Reserved</h5>
                  </div>
                  <div class="modal-body">
                    <p>{{ dateBegin }} - {{ dateEnd }}</p>
                    <p>{{ guestName }} {{ guestLast }}</p>
                    <p>
                      {{ RoomNB }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1 sun" style="margin-left: 16%">
            <label class="id">486</label>
            <DisableButton
              :disabled="isParasolDisabled(486)"
              @click="btnid(486)"
              :class="{ 'disabled-button': isParasolDisabled(486) }"
              @mouseenter="showDisabledDuration(486, $event)"
              @mouseleave="hideDisabledDuration()"
            />

            <div
              class="modal modal-position"
              :class="{ 'show-modal': showDuration && activeButton === 486 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal486"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Reserved</h5>
                  </div>
                  <div class="modal-body">
                    <p>{{ dateBegin }} - {{ dateEnd }}</p>
                    <p>{{ guestName }} {{ guestLast }}</p>
                    <p>
                      {{ RoomNB }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-5 sun" style=""></div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="padding-left: 25%">
            <label class="id">497</label>
            <DisableButton
              :disabled="isParasolDisabled(497)"
              @click="btnid(497)"
              :class="{ 'disabled-button': isParasolDisabled(497) }"
              @mouseenter="showDisabledDuration(497, $event)"
              @mouseleave="hideDisabledDuration()"
            />

            <div
              class="modal modal-position"
              :class="{ 'show-modal': showDuration && activeButton === 497 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal497"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Reserved</h5>
                  </div>
                  <div class="modal-body">
                    <p>{{ dateBegin }} - {{ dateEnd }}</p>
                    <p>{{ guestName }} {{ guestLast }}</p>
                    <p>
                      {{ RoomNB }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1 sun" style="margin-left: 18%">
            <label class="id">487</label>
            <DisableButton
              :disabled="isParasolDisabled(487)"
              @click="btnid(487)"
              :class="{ 'disabled-button': isParasolDisabled(487) }"
              @mouseenter="showDisabledDuration(487, $event)"
              @mouseleave="hideDisabledDuration()"
            />

            <div
              class="modal modal-position"
              :class="{ 'show-modal': showDuration && activeButton === 487 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal487"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Reserved</h5>
                  </div>
                  <div class="modal-body">
                    <p>{{ dateBegin }} - {{ dateEnd }}</p>
                    <p>{{ guestName }} {{ guestLast }}</p>
                    <p>
                      {{ RoomNB }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-5 sun" style=""></div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="padding-left: 32%">
            <label class="id">496</label>
            <DisableButton
              :disabled="isParasolDisabled(496)"
              @click="btnid(496)"
              :class="{ 'disabled-button': isParasolDisabled(496) }"
              @mouseenter="showDisabledDuration(496, $event)"
              @mouseleave="hideDisabledDuration()"
            />

            <div
              class="modal modal-position"
              :class="{ 'show-modal': showDuration && activeButton === 496 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal496"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Reserved</h5>
                  </div>
                  <div class="modal-body">
                    <p>{{ dateBegin }} - {{ dateEnd }}</p>
                    <p>{{ guestName }} {{ guestLast }}</p>

                    <p>
                      {{ RoomNB }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1 sun" style="margin-left: 20%">
            <label class="id">488</label>
            <DisableButton
              :disabled="isParasolDisabled(488)"
              @click="btnid(488)"
              :class="{ 'disabled-button': isParasolDisabled(488) }"
              @mouseenter="showDisabledDuration(488, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal modal-position"
              :class="{ 'show-modal': showDuration && activeButton === 488 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal488"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Reserved</h5>
                  </div>
                  <div class="modal-body">
                    <p>{{ dateBegin }} - {{ dateEnd }}</p>
                    <p>{{ guestName }} {{ guestLast }}</p>

                    <p>
                      {{ RoomNB }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-5 sun"></div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1" style="padding-left: 40%">
            <label class="id">495</label>
            <DisableButton
              :disabled="isParasolDisabled(495)"
              @click="btnid(495)"
              :class="{ 'disabled-button': isParasolDisabled(495) }"
              @mouseenter="showDisabledDuration(495, $event)"
              @mouseleave="hideDisabledDuration()"
            />

            <div
              class="modal modal-position"
              :class="{ 'show-modal': showDuration && activeButton === 495 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal495"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Reserved</h5>
                  </div>
                  <div class="modal-body">
                    <p>{{ dateBegin }} - {{ dateEnd }}</p>
                    <p>{{ guestName }} {{ guestLast }}</p>
                    <p>
                      {{ RoomNB }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1" style="margin-left: 20%">
            <label class="id">489</label>
            <DisableButton
              :disabled="isParasolDisabled(489)"
              @click="btnid(489)"
              :class="{ 'disabled-button': isParasolDisabled(489) }"
              @mouseenter="showDisabledDuration(489, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal modal-position"
              :class="{ 'show-modal': showDuration && activeButton === 489 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal489"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Reserved</h5>
                  </div>
                  <div class="modal-body">
                    <p>{{ dateBegin }} - {{ dateEnd }}</p>
                    <p>{{ guestName }} {{ guestLast }}</p>
                    <p>
                      {{ RoomNB }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-5 sun"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  width: max-content;
  height: max-content;
  display: none;
  position: absolute;
  z-index: 9999;

  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.show-modal {
  display: block;
  opacity: 1;
}
.id {
  width: 10vh;
  font-weight: lighter;
  font-style: italic;
  text-align: center;
}

.col-1 {
  padding: 1vh;
}

.imgbk {
  background-image: url("@/assets/reverol.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  width: initial;
  margin: 2vh;
  align-content: center;
}
</style>

<script>
import { Disable } from "@/services";
import DisableButton from "@/components/DisableButton.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "Reverol",

  data() {
    return {
      name: ["Reverol"],
      disabledParasols: [],
      activeButton: null,
      showDuration: false,
      modalTop: 0,
      modalLeft: 0,
      RoomNB: "",
      dateBegin: "",
      dateEnd: "",
      guestName: "",
      guestLast: "",
    };
  },

  async mounted() {
    try {
      let result = await Disable.disableReverol();

      Object.values(result).forEach((parasol) => {
        this.disabledParasols.push(parasol.parasol);
      });
      // console.log(this.disabledParasols);
      //this.disabledParasols = result.parasol;
    } catch (error) {
      console.error("Error fetching disabled parasols:", error);
    }
  },

  methods: {
    isParasolDisabled(parasolId) {
      return this.disabledParasols.includes(parasolId);
    },
    async showDisabledDuration(parasolId, event) {
      let result = await Disable.disableReverol();
      Object.values(result).forEach((parasol) => {
        if (parasolId == parasol.parasol) {
          (this.dateBegin = parasol.startDate),
            (this.dateEnd = parasol.endDate),
            (this.guestName = parasol.gname),
            (this.guestLast = parasol.gsurname),
            (this.RoomNB = parasol.roomnb),
            (this.showDuration = true);
          const button = event.target;
          this.activeButton = parasolId;

          const modal = this.$refs[`modal${parasolId}`];
          const buttonRect = button.getBoundingClientRect();
          const modalRect = modal.getBoundingClientRect();
          const modalHeight = modalRect.height;
          const modalWidth = modalRect.width;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;

          let modalTop =
            buttonRect.bottom - modalRect.height + window.pageYOffset;
          let modalLeft = buttonRect.left + window.pageXOffset + 100;

          // Adjust modal position if it exceeds the page boundaries
          if (modalTop + modalHeight > windowHeight) {
            modalTop = windowHeight - modalHeight - 60;
          }

          if (modalLeft + modalWidth > windowWidth) {
            modalLeft = windowWidth - modalWidth;
          }
          this.modalTop = modalTop;
          this.modalLeft = modalLeft;
        }
      });
    },
    hideDisabledDuration() {
      this.showDuration = false;
    },

    btnid(buttonvalue) {
      let name = {
        name: this.name[0],
        id: buttonvalue,
      };
      localStorage.setItem("id", JSON.stringify(name));

      this.$router.push({ name: "payment" });
    },
  },

  components: {
    Navigation,
    DisableButton,
  },
};
</script>
