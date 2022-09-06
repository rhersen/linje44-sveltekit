<script type="ts">
  import type TrainAnnouncement from './TrainAnnouncement';
  export let announcements: TrainAnnouncement[];

  function hhmm(AdvertisedTimeAtLocation: string) {
    return AdvertisedTimeAtLocation?.substring(11, 16);
  }

  function from(s: string) {
    switch (s) {
      case 'Tul':
        return 'Tullinge';
      case 'Mr':
        return 'Märsta';
      case 'Söc':
        return 'Södertälje';
      default:
        return s;
    }
  }

  function to(a) {
    return a?.map(({ LocationName }) => from(LocationName));
  }
</script>

<div>
  {#each announcements as { AdvertisedTrainIdent, AdvertisedTimeAtLocation, TimeAtLocation, Canceled, LocationSignature, ToLocation }}
    <div>
      {AdvertisedTrainIdent}
      {hhmm(AdvertisedTimeAtLocation)} från {from(LocationSignature)} till {to(
        ToLocation
      )}
      är inställt
    </div>
  {/each}
</div>
