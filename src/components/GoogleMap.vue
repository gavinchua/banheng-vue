<template lang="pug">
  gmap-map(
    ref="gmap"
    :center="center"
    :zoom="16"
    style="width:100%;  height: 100vh;"
  )
    gmap-marker(
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      @click="toggleInfoWindow(m,index)"
    )
    gmap-info-window(
      :options="infoOptions"
      :position="infoWindowPos"
      :opened="infoWinOpen"
      @closeclick="infoWinOpen=false"
    )
      div(
        v-html="infoContent"
      )
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: {
        lat: 1.264553,
        lng: 103.819304,
      },
      map: null,
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0,
      },
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      markers: [
        {
          name: 'HarbourFront Center',
          address: '1 Maritime Square\n#04-01 HarbourFront Centre',
          postalcode: '099253',
          position: {
            lat: 1.264553,
            lng: 103.819304,
          },
        },
      ],
    };
  },
  mounted() {
    this.$refs.gmap.$mapPromise.then((map) => {
      const bounds = new google.maps.LatLngBounds();
      for (const m of this.markers) {
        bounds.extend(m.position);
      }
      map.fitBounds(bounds);
    });
  },
  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);

      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },

    getInfoWindowContent: function (marker) {
      return (
        `<div>
          <h6>${marker.name}</h6>
          <p className="prewrap">
            ${marker.address}
            <br />
            Singapore ${marker.postalcode}
          </p>
        </div>`
      );
    },
  },
};
</script>

<style lang="stylus">

</style>
