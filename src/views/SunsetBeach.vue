<template>
  <div>
    <Navigation v-for="value in name" :key="value" :beach="value" />
  </div>

  <div class="container-fluid">
    <div class="imgbk">
      <div class="row justify-content-start" style="margin-bottom: 10vh"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-left: 77%; margin-bottom: -8vh">
            <label class="id">555</label>
            <DisableButton
              :disabled="isParasolDisabled(555)"
              @click="btnid(555)"
              :class="{ 'disabled-button': isParasolDisabled(555) }"
              @mouseenter="showDisabledDuration(555, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 555 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal555"
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
          <div class="col-1 sun" style="margin-left: 86%; margin-top: 6vh">
            <label class="id">561</label>
            <DisableButton
              :disabled="isParasolDisabled(561)"
              @click="btnid(561)"
              :class="{ 'disabled-button': isParasolDisabled(561) }"
              @mouseenter="showDisabledDuration(561, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 561 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal561"
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
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-left: 65%; margin-top: -8vh">
            <label class="id">556</label>
            <DisableButton
              :disabled="isParasolDisabled(556)"
              @click="btnid(556)"
              :class="{ 'disabled-button': isParasolDisabled(556) }"
              @mouseenter="showDisabledDuration(556, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 556 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal556"
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
          <div class="col-1 sun" style="margin-left: 74%; margin-top: -3vh">
            <label class="id">562</label>
            <DisableButton
              :disabled="isParasolDisabled(562)"
              @click="btnid(562)"
              :class="{ 'disabled-button': isParasolDisabled(562) }"
              @mouseenter="showDisabledDuration(562, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 562 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal562"
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
          <div class="col-1 sun" style="margin-left: -6%; margin-top: 6vh">
            <label class="id">567</label>
            <DisableButton
              :disabled="isParasolDisabled(567)"
              @click="btnid(567)"
              :class="{ 'disabled-button': isParasolDisabled(567) }"
              @mouseenter="showDisabledDuration(567, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 567 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal567"
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
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-left: 53%; margin-top: -20vh">
            <label class="id">557</label>
            <DisableButton
              :disabled="isParasolDisabled(557)"
              @click="btnid(557)"
              :class="{ 'disabled-button': isParasolDisabled(557) }"
              @mouseenter="showDisabledDuration(557, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 557 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal557"
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
          <div class="col-1 sun" style="margin-left: 62%; margin-top: -10vh">
            <label class="id">563</label>
            <DisableButton
              :disabled="isParasolDisabled(563)"
              @click="btnid(563)"
              :class="{ 'disabled-button': isParasolDisabled(563) }"
              @mouseenter="showDisabledDuration(563, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 563 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal563"
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
          <div class="col-1 sun" style="margin-left: -15%; margin-top: -3vh">
            <label class="id">568</label>
            <DisableButton
              :disabled="isParasolDisabled(568)"
              @click="btnid(568)"
              :class="{ 'disabled-button': isParasolDisabled(568) }"
              @mouseenter="showDisabledDuration(568, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 568 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal568"
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
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-left: 40%; margin-top: -20vh">
            <label class="id">558</label>
            <DisableButton
              :disabled="isParasolDisabled(558)"
              @click="btnid(558)"
              :class="{ 'disabled-button': isParasolDisabled(558) }"
              @mouseenter="showDisabledDuration(558, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 558 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal558"
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
          <div class="col-1 sun" style="margin-left: -26%; margin-top: -6vh">
            <label class="id">564</label>
            <DisableButton
              :disabled="isParasolDisabled(564)"
              @click="btnid(564)"
              :class="{ 'disabled-button': isParasolDisabled(564) }"
              @mouseenter="showDisabledDuration(564, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 564 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal564"
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
          <div class="col-1 sun" style="margin-left: -23%; margin-top: 3vh">
            <label class="id">569</label>
            <DisableButton
              :disabled="isParasolDisabled(569)"
              @click="btnid(569)"
              :class="{ 'disabled-button': isParasolDisabled(569) }"
              @mouseenter="showDisabledDuration(569, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 569 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal569"
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
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-left: 26%; margin-top: -26vh">
            <label class="id">559</label>
            <DisableButton
              :disabled="isParasolDisabled(559)"
              @click="btnid(559)"
              :class="{ 'disabled-button': isParasolDisabled(559) }"
              @mouseenter="showDisabledDuration(559, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 559 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal559"
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
          <div class="col-1 sun" style="margin-left: -39%; margin-top: -11vh">
            <label class="id">565</label>
            <DisableButton
              :disabled="isParasolDisabled(565)"
              @click="btnid(565)"
              :class="{ 'disabled-button': isParasolDisabled(565) }"
              @mouseenter="showDisabledDuration(565, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 565 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal565"
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
          <div class="col-1 sun" style="margin-left: -33%; margin-top: -1vh">
            <label class="id">570</label>
            <DisableButton
              :disabled="isParasolDisabled(570)"
              @click="btnid(570)"
              :class="{ 'disabled-button': isParasolDisabled(570) }"
              @mouseenter="showDisabledDuration(570, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 570 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal570"
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
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-left: 13%; margin-top: -20vh">
            <label class="id">560</label>
            <DisableButton
              :disabled="isParasolDisabled(560)"
              @click="btnid(560)"
              :class="{ 'disabled-button': isParasolDisabled(560) }"
              @mouseenter="showDisabledDuration(560, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 560 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal560"
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
          <div class="col-1 sun" style="margin-left: -65%; margin-top: -11vh">
            <label class="id">566</label>
            <DisableButton
              :disabled="isParasolDisabled(566)"
              @click="btnid(566)"
              :class="{ 'disabled-button': isParasolDisabled(566) }"
              @mouseenter="showDisabledDuration(566, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 566 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal566"
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
        </div>
      </div>

      <div
        class="row justify-content-start"
        style="margin-bottom: 10vh; position: relative"
      ></div>
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
.col-1 {
  margin-left: auto;
  margin-right: auto;
}
.id {
  width: 10vh;
  font-weight: lighter;
  font-style: italic;
  text-align: center;
}
.sbtn:hover {
  animation: pulse 1s;
  transform: scale(1.5);
}
.sbtn {
  background-image: url("@/assets/suncobre.png");
  background-position: center;
  background-color: transparent;
  background-size: cover;
  cursor: pointer;
  border: none;
  width: 8vh;
  height: 8vh;
}

.imgbk {
  background-image: url("@/assets/sunset.png");
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
  name: "SunsetBeach",

  data() {
    return {
      name: ["Sunset Beach"],
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
      let result = await Disable.disableSunset();

      Object.values(result).forEach((parasol) => {
        this.disabledParasols.push(parasol.parasol);
      });
    } catch (error) {
      console.error("Error fetching disabled parasols:", error);
    }
  },

  methods: {
    isParasolDisabled(parasolId) {
      return this.disabledParasols.includes(parasolId);
    },

    async showDisabledDuration(parasolId, event) {
      let result = await Disable.disableSunset();
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
          const scrollX = window.pageXOffset;
          const scrollY = window.pageYOffset;

          let modalTop = buttonRect.bottom + scrollY + 10;
          let modalLeft = buttonRect.left + scrollX;

          // Adjust modal position if it exceeds the page boundaries
          if (modalTop + modalHeight > windowHeight) {
            modalTop = windowHeight - modalHeight - 170;
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
