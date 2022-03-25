<script type="ts">
  import type TrainAnnouncement from './TrainAnnouncement';
  export let announcements: TrainAnnouncement[];

  function hhmm(AdvertisedTimeAtLocation: string) {
    return AdvertisedTimeAtLocation?.substring(11, 16);
  }
</script>

<div>
  {#each announcements as { AdvertisedTrainIdent, AdvertisedTimeAtLocation, TimeAtLocation, Canceled, LocationSignature, ToLocation }}
    {#if Canceled}
      <div>
        {AdvertisedTrainIdent}
        {hhmm(AdvertisedTimeAtLocation)} från {LocationSignature} till {'kallhäll'}
        är inställt
      </div>
    {:else if TimeAtLocation}
      <div>
        {AdvertisedTrainIdent}
        {hhmm(AdvertisedTimeAtLocation)} från {LocationSignature} till {'kallhäll'}
        gick {hhmm(TimeAtLocation)}
      </div>
    {:else}
      <div>
        {AdvertisedTrainIdent}
        {hhmm(AdvertisedTimeAtLocation)} från {LocationSignature} till {'kallhäll'}
        ska gå som vanligt
      </div>
    {/if}
  {/each}
</div>
