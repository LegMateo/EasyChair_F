<template>
  <div>
    <Navigation v-for="value in name" :key="value" :beach="value" />
  </div>

  <div class="container-fluid">
    <div class="imgbk">
      <div class="row justify-content-start" style="margin-bottom: 10vh"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-top: 5.2vh">
            <label class="id">501</label>

            <DisableButton
              :disabled="isParasolDisabled(501)"
              @click="btnid(501)"
              :class="{ 'disabled-button': isParasolDisabled(501) }"
              @mouseenter="showDisabledDuration(501, $event)"
              @mouseleave="hideDisabledDuration()"
            />

            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 501 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal501"
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
          <div class="col-1 sun" style="margin-top: 4.2vh">
            <label class="id">502</label>
            <DisableButton
              :disabled="isParasolDisabled(502)"
              @click="btnid(502)"
              :class="{ 'disabled-button': isParasolDisabled(502) }"
              @mouseenter="showDisabledDuration(502, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 502 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal502"
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
          <div class="col-1 sun" style="margin-top: 3.2vh">
            <label class="id">503</label>
            <DisableButton
              :disabled="isParasolDisabled(503)"
              @click="btnid(503)"
              :class="{ 'disabled-button': isParasolDisabled(503) }"
              @mouseenter="showDisabledDuration(503, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 503 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal503"
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
          <div class="col-1 sun" style="margin-top: 2.2vh">
            <label class="id">504</label>
            <DisableButton
              :disabled="isParasolDisabled(504)"
              @click="btnid(504)"
              :class="{ 'disabled-button': isParasolDisabled(504) }"
              @mouseenter="showDisabledDuration(504, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 504 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal504"
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
          <div class="col-1 sun" style="margin-top: 1.2vh">
            <label class="id">505</label>
            <DisableButton
              :disabled="isParasolDisabled(505)"
              @click="btnid(505)"
              :class="{ 'disabled-button': isParasolDisabled(505) }"
              @mouseenter="showDisabledDuration(505, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 505 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal505"
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
            <label class="id">506</label>
            <DisableButton
              :disabled="isParasolDisabled(506)"
              @click="btnid(506)"
              :class="{ 'disabled-button': isParasolDisabled(506) }"
              @mouseenter="showDisabledDuration(506, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 506 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal506"
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
          <div class="col-1 sun" style="margin-top: 1.2vh">
            <label class="id">507</label>
            <DisableButton
              :disabled="isParasolDisabled(507)"
              @click="btnid(507)"
              :class="{ 'disabled-button': isParasolDisabled(507) }"
              @mouseenter="showDisabledDuration(507, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 507 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal507"
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
          <div class="col-1 sun" style="margin-top: 2.2vh">
            <label class="id">508</label>
            <DisableButton
              :disabled="isParasolDisabled(508)"
              @click="btnid(508)"
              :class="{ 'disabled-button': isParasolDisabled(508) }"
              @mouseenter="showDisabledDuration(508, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 508 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal508"
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
          <div class="col-1 sun" style="margin-top: 3.2vh">
            <label class="id">509</label>
            <DisableButton
              :disabled="isParasolDisabled(509)"
              @click="btnid(509)"
              :class="{ 'disabled-button': isParasolDisabled(509) }"
              @mouseenter="showDisabledDuration(509, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 509 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal509"
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
          <div class="col-1 sun" style="margin-top: 4.2vh">
            <label class="id">510</label>
            <DisableButton
              :disabled="isParasolDisabled(510)"
              @click="btnid(510)"
              :class="{ 'disabled-button': isParasolDisabled(510) }"
              @mouseenter="showDisabledDuration(510, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 510 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal510"
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
          <div class="col-1 sun" style="margin-top: 5.2vh">
            <label class="id">511</label>
            <DisableButton
              :disabled="isParasolDisabled(511)"
              @click="btnid(511)"
              :class="{ 'disabled-button': isParasolDisabled(511) }"
              @mouseenter="showDisabledDuration(511, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 511 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal511"
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

      <div class="row justify-content-start" style="margin-bottom: 10vh"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-1 sun" style="margin-top: 5.2vh">
            <label class="id">512</label>
            <DisableButton
              :disabled="isParasolDisabled(512)"
              @click="btnid(512)"
              :class="{ 'disabled-button': isParasolDisabled(512) }"
              @mouseenter="showDisabledDuration(512, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 512 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal512"
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
          <div class="col-1 sun" style="margin-top: 4.2vh">
            <label class="id">513</label>
            <DisableButton
              :disabled="isParasolDisabled(513)"
              @click="btnid(513)"
              :class="{ 'disabled-button': isParasolDisabled(513) }"
              @mouseenter="showDisabledDuration(513, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 513 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal513"
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
          <div class="col-1 sun" style="margin-top: 3.2vh">
            <label class="id">514</label>
            <DisableButton
              :disabled="isParasolDisabled(514)"
              @click="btnid(514)"
              :class="{ 'disabled-button': isParasolDisabled(514) }"
              @mouseenter="showDisabledDuration(514, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 514 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal514"
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
          <div class="col-1 sun" style="margin-top: 2.2vh">
            <label class="id">515</label>
            <DisableButton
              :disabled="isParasolDisabled(515)"
              @click="btnid(515)"
              :class="{ 'disabled-button': isParasolDisabled(515) }"
              @mouseenter="showDisabledDuration(515, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 515 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal515"
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
          <div class="col-1 sun" style="margin-top: 1.2vh">
            <label class="id">516</label>
            <DisableButton
              :disabled="isParasolDisabled(516)"
              @click="btnid(516)"
              :class="{ 'disabled-button': isParasolDisabled(516) }"
              @mouseenter="showDisabledDuration(516, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 516 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal516"
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
            <label class="id">517</label>
            <DisableButton
              :disabled="isParasolDisabled(517)"
              @click="btnid(517)"
              :class="{ 'disabled-button': isParasolDisabled(517) }"
              @mouseenter="showDisabledDuration(517, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 517 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal517"
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
          <div class="col-1 sun" style="margin-top: 1.2vh">
            <label class="id">518</label>
            <DisableButton
              :disabled="isParasolDisabled(518)"
              @click="btnid(518)"
              :class="{ 'disabled-button': isParasolDisabled(518) }"
              @mouseenter="showDisabledDuration(518, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 518 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal518"
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
          <div class="col-1 sun" style="margin-top: 2.2vh">
            <label class="id">519</label>
            <DisableButton
              :disabled="isParasolDisabled(519)"
              @click="btnid(519)"
              :class="{ 'disabled-button': isParasolDisabled(519) }"
              @mouseenter="showDisabledDuration(519, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 519 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal519"
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
          <div class="col-1 sun" style="margin-top: 3.2vh">
            <label class="id">520</label>
            <DisableButton
              :disabled="isParasolDisabled(520)"
              @click="btnid(520)"
              :class="{ 'disabled-button': isParasolDisabled(520) }"
              @mouseenter="showDisabledDuration(520, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 520 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal520"
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
          <div class="col-1 sun" style="margin-top: 4.2vh">
            <label class="id">521</label>
            <DisableButton
              :disabled="isParasolDisabled(521)"
              @click="btnid(521)"
              :class="{ 'disabled-button': isParasolDisabled(521) }"
              @mouseenter="showDisabledDuration(521, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 521 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal521"
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
          <div class="col-1 sun" style="margin-top: 5.2vh">
            <label class="id">522</label>
            <DisableButton
              :disabled="isParasolDisabled(522)"
              @click="btnid(522)"
              :class="{ 'disabled-button': isParasolDisabled(522) }"
              @mouseenter="showDisabledDuration(522, $event)"
              @mouseleave="hideDisabledDuration()"
            />
            <div
              class="modal"
              :class="{ 'show-modal': showDuration && activeButton === 522 }"
              :style="{ top: modalTop + 'px', left: modalLeft + 'px' }"
              ref="modal522"
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
.modal-position {
  position: absolute;
  top: 0;
  left: 0;
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
  background-image: url("@/assets/maro.png");
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
  name: "MaroFamilyBeach",
  data() {
    return {
      name: ["Maro Family Beach"],
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
      let result = await Disable.disableMaro();

      Object.values(result).forEach((parasol) => {
        this.disabledParasols.push(parasol.parasol);
      });
    } catch (error) {
      console.error("Error fetching disabled parasols:", error);
    }
  },

  methods: {},

  methods: {
    isParasolDisabled(parasolId) {
      return this.disabledParasols.includes(parasolId);
    },
    async showDisabledDuration(parasolId, event) {
      let result = await Disable.disableMaro();
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

          let modalTop =
            buttonRect.bottom - modalRect.height + window.pageYOffset + 10;
          let modalLeft = buttonRect.left + window.pageXOffset;

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
