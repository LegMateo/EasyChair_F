<template>
  <div>
    <Navigation v-for="value in name" :key="value" :beach="value" />
  </div>

  <div class="container-fluid">
    <div class="imgbk">
      <div class="row justify-content-start" style="margin-bottom: 20vh"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-top: 5%">
            <label class="id">523</label>
            <DisableButton
              :disabled="isParasolDisabled(523)"
              @click="btnid(523)"
              :class="{ 'disabled-button': isParasolDisabled(523) }"
              @mouseenter="showDisabledDuration(523, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 523 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal523"
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
          <div class="col-1 sun" style="margin-top: 4%">
            <label class="id">524</label>
            <DisableButton
              :disabled="isParasolDisabled(524)"
              @click="btnid(524)"
              :class="{ 'disabled-button': isParasolDisabled(524) }"
              @mouseenter="showDisabledDuration(524, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 524 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal524"
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
          <div class="col-1 sun" style="margin-top: 3%">
            <label class="id">525</label>
            <DisableButton
              :disabled="isParasolDisabled(525)"
              @click="btnid(525)"
              :class="{ 'disabled-button': isParasolDisabled(525) }"
              @mouseenter="showDisabledDuration(525, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 525 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal525"
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
          <div class="col-1 sun" style="margin-top: 2%">
            <label class="id">526</label>
            <DisableButton
              :disabled="isParasolDisabled(526)"
              @click="btnid(526)"
              :class="{ 'disabled-button': isParasolDisabled(526) }"
              @mouseenter="showDisabledDuration(526, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 526 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal526"
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
          <div class="col-1 sun" style="margin-top: 1%">
            <label class="id">527</label>
            <DisableButton
              :disabled="isParasolDisabled(527)"
              @click="btnid(527)"
              :class="{ 'disabled-button': isParasolDisabled(527) }"
              @mouseenter="showDisabledDuration(527, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 527 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal527"
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
          <div class="col-1 sun">
            <label class="id">528</label>
            <DisableButton
              :disabled="isParasolDisabled(528)"
              @click="btnid(528)"
              :class="{ 'disabled-button': isParasolDisabled(528) }"
              @mouseenter="showDisabledDuration(528, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 528 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal528"
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
          <div class="col-1 sun" style="margin-top: 1%">
            <label class="id">529</label>
            <DisableButton
              :disabled="isParasolDisabled(529)"
              @click="btnid(529)"
              :class="{ 'disabled-button': isParasolDisabled(529) }"
              @mouseenter="showDisabledDuration(529, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 529 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal529"
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
          <div class="col-1 sun" style="margin-top: 2%">
            <label class="id">530</label>
            <DisableButton
              :disabled="isParasolDisabled(530)"
              @click="btnid(530)"
              :class="{ 'disabled-button': isParasolDisabled(530) }"
              @mouseenter="showDisabledDuration(530, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 530 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal530"
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
          <div class="col-1 sun" style="margin-top: 3%">
            <label class="id">531</label>
            <DisableButton
              :disabled="isParasolDisabled(531)"
              @click="btnid(531)"
              :class="{ 'disabled-button': isParasolDisabled(531) }"
              @mouseenter="showDisabledDuration(531, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 531 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal531"
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
          <div class="col-1 sun" style="margin-top: 4%">
            <label class="id">532</label>
            <DisableButton
              :disabled="isParasolDisabled(532)"
              @click="btnid(532)"
              :class="{ 'disabled-button': isParasolDisabled(532) }"
              @mouseenter="showDisabledDuration(532, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 532 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal532"
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
          <div class="col-1 sun" style="margin-top: 5%">
            <label class="id">533</label>
            <DisableButton
              :disabled="isParasolDisabled(533)"
              @click="btnid(533)"
              :class="{ 'disabled-button': isParasolDisabled(533) }"
              @mouseenter="showDisabledDuration(533, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 533 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal533"
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

      <div class="row justify-content-start" style="margin-bottom: 1vh"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-top: 5%">
            <label class="id">534</label>
            <DisableButton
              :disabled="isParasolDisabled(534)"
              @click="btnid(534)"
              :class="{ 'disabled-button': isParasolDisabled(534) }"
              @mouseenter="showDisabledDuration(534, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 534 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal534"
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
          <div class="col-1 sun" style="margin-top: 4%">
            <label class="id">535</label>
            <DisableButton
              :disabled="isParasolDisabled(535)"
              @click="btnid(535)"
              :class="{ 'disabled-button': isParasolDisabled(535) }"
              @mouseenter="showDisabledDuration(535, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 535 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal535"
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
          <div class="col-1 sun" style="margin-top: 3%">
            <label class="id">536</label>
            <DisableButton
              :disabled="isParasolDisabled(536)"
              @click="btnid(536)"
              :class="{ 'disabled-button': isParasolDisabled(536) }"
              @mouseenter="showDisabledDuration(536, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 536 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal536"
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
          <div class="col-1 sun" style="margin-top: 2%">
            <label class="id">537</label>
            <DisableButton
              :disabled="isParasolDisabled(537)"
              @click="btnid(537)"
              :class="{ 'disabled-button': isParasolDisabled(537) }"
              @mouseenter="showDisabledDuration(537, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 537 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal537"
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
          <div class="col-1 sun" style="margin-top: 1%">
            <label class="id">538</label>
            <DisableButton
              :disabled="isParasolDisabled(538)"
              @click="btnid(538)"
              :class="{ 'disabled-button': isParasolDisabled(538) }"
              @mouseenter="showDisabledDuration(538, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 538 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal538"
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
          <div class="col-1 sun">
            <label class="id">539</label>
            <DisableButton
              :disabled="isParasolDisabled(539)"
              @click="btnid(539)"
              :class="{ 'disabled-button': isParasolDisabled(539) }"
              @mouseenter="showDisabledDuration(539, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 539 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal539"
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
          <div class="col-1 sun" style="margin-top: 1%">
            <label class="id">540</label>
            <DisableButton
              :disabled="isParasolDisabled(540)"
              @click="btnid(540)"
              :class="{ 'disabled-button': isParasolDisabled(540) }"
              @mouseenter="showDisabledDuration(540, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 540 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal540"
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
          <div class="col-1 sun" style="margin-top: 2%">
            <label class="id">541</label>
            <DisableButton
              :disabled="isParasolDisabled(541)"
              @click="btnid(541)"
              :class="{ 'disabled-button': isParasolDisabled(541) }"
              @mouseenter="showDisabledDuration(541, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 541 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal541"
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
          <div class="col-1 sun" style="margin-top: 3%">
            <label class="id">542</label>
            <DisableButton
              :disabled="isParasolDisabled(542)"
              @click="btnid(542)"
              :class="{ 'disabled-button': isParasolDisabled(542) }"
              @mouseenter="showDisabledDuration(542, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 542 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal542"
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
          <div class="col-1 sun" style="margin-top: 4%">
            <label class="id">543</label>
            <DisableButton
              :disabled="isParasolDisabled(543)"
              @click="btnid(543)"
              :class="{ 'disabled-button': isParasolDisabled(543) }"
              @mouseenter="showDisabledDuration(543, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 543 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal543"
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
          <div class="col-1 sun" style="margin-top: 5%">
            <label class="id">544</label>
            <DisableButton
              :disabled="isParasolDisabled(544)"
              @click="btnid(544)"
              :class="{ 'disabled-button': isParasolDisabled(544) }"
              @mouseenter="showDisabledDuration(544, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 544 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal544"
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

.id {
  width: 10vh;
  font-weight: lighter;
  font-style: italic;
  text-align: center;
}

.col-1 {
  padding: 1vh;
}
.sun {
  margin-left: auto;
  margin-right: auto;
  height: 8vh;
  width: 8vh;
}

.imgbk {
  background-image: url("@/assets/surf.png");
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
  name: "SurfmaniaBeach",
  data() {
    return {
      name: ["Surfmania Beach"],
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
      let result = await Disable.disableSurf();

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
      let result = await Disable.disableSurf();
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

          let modalTop =
            buttonRect.bottom - modalRect.height + window.pageYOffset + 10;
          let modalLeft = buttonRect.left + window.pageXOffset;

          if (modalTop < 0) {
            modalTop = 0;
          } else if (modalTop + modalHeight > windowHeight) {
            modalTop = windowHeight - modalHeight;
          }

          // Adjust modal position if it exceeds the left or right boundaries
          if (modalLeft + modalWidth > windowWidth) {
            modalLeft = windowWidth - modalWidth;
          } else if (modalLeft < 0) {
            modalLeft = 0;
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
