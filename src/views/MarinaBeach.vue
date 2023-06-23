<template>
  <div>
    <Navigation v-for="value in name" :key="value" :beach="value" />
  </div>

  <div class="container-fluid">
    <div class="imgbk">
      <div class="row justify-content-start" style="margin-bottom: 2%"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-left: 60%">
            <label class="id">545</label>
            <DisableButton
              :disabled="isParasolDisabled(545)"
              @click="btnid(545)"
              :class="{ 'disabled-button': isParasolDisabled(545) }"
              @mouseenter="showDisabledDuration(545, $event)"
              @mouseleave="hideDisabledDuration()"
            />

            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 545 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal545"
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
          <div class="col-1 sun" style="margin-top: 4.2vh; padding-left: 5%">
            <label class="id">550</label>
            <DisableButton
              :disabled="isParasolDisabled(550)"
              @click="btnid(550)"
              :class="{ 'disabled-button': isParasolDisabled(550) }"
              @mouseenter="showDisabledDuration(450, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 550 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal550"
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
          <div class="col-1 sun" style="margin-left: 60%">
            <label class="id">546</label>
            <DisableButton
              :disabled="isParasolDisabled(546)"
              @click="btnid(546)"
              :class="{ 'disabled-button': isParasolDisabled(546) }"
              @mouseenter="showDisabledDuration(546, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 546 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal546"
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
          <div class="col-1 sun" style="margin-top: 4.2vh; padding-left: 5%">
            <label class="id">551</label>
            <DisableButton
              :disabled="isParasolDisabled(551)"
              @click="btnid(551)"
              :class="{ 'disabled-button': isParasolDisabled(551) }"
              @mouseenter="showDisabledDuration(551, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 551 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal551"
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
          <div class="col-1 sun" style="margin-left: 59%">
            <label class="id">547</label>
            <DisableButton
              :disabled="isParasolDisabled(547)"
              @click="btnid(547)"
              :class="{ 'disabled-button': isParasolDisabled(547) }"
              @mouseenter="showDisabledDuration(547, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 547 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal547"
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
          <div class="col-1 sun" style="margin-top: 4.2vh; padding-left: 5%">
            <label class="id">552</label>
            <DisableButton
              :disabled="isParasolDisabled(552)"
              @click="btnid(552)"
              :class="{ 'disabled-button': isParasolDisabled(552) }"
              @mouseenter="showDisabledDuration(552, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 552 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal552"
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
          <div class="col-1 sun" style="margin-left: 57%">
            <label class="id">548</label>
            <DisableButton
              :disabled="isParasolDisabled(548)"
              @click="btnid(548)"
              :class="{ 'disabled-button': isParasolDisabled(548) }"
              @mouseenter="showDisabledDuration(548, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 548 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal548"
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
          <div class="col-1 sun" style="margin-top: 4.2vh; padding-left: 5%">
            <label class="id">553</label>
            <DisableButton
              :disabled="isParasolDisabled(553)"
              @click="btnid(553)"
              :class="{ 'disabled-button': isParasolDisabled(553) }"
              @mouseenter="showDisabledDuration(553, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 553 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal553"
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
          <div class="col-1 sun" style="margin-left: 53%">
            <label class="id">549</label>
            <DisableButton
              :disabled="isParasolDisabled(549)"
              @click="btnid(549)"
              :class="{ 'disabled-button': isParasolDisabled(549) }"
              @mouseenter="showDisabledDuration(549, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 549 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal549"
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
          <div class="col-1 sun" style="margin-top: 4.2vh; padding-left: 5%">
            <label class="id">554</label>
            <DisableButton
              :disabled="isParasolDisabled(554)"
              @click="btnid(554)"
              :class="{ 'disabled-button': isParasolDisabled(554) }"
              @mouseenter="showDisabledDuration(554, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 554 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal554"
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
.col-1 {
  padding-block: 1vh;
}

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

.id {
  width: 10vh;
  font-weight: lighter;
  font-style: italic;
  text-align: center;
}

.imgbk {
  background-image: url("@/assets/marina.png");
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
  name: "Marina Beach",
  data() {
    return {
      name: ["Marina Beach"],
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
      let result = await Disable.disableMarina();

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
      let result = await Disable.disableMarina();
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

          let modalTop = buttonRect.top - modalRect.height;
          +window.pageYOffset;
          let modalLeft = buttonRect.left + window.pageXOffset + 60;

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
