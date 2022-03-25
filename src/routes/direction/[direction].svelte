<script type="ts">
  import type TrainAnnouncement from './TrainAnnouncement';
  export let announcements: TrainAnnouncement[];

  function hhmm(AdvertisedTimeAtLocation: string) {
    return AdvertisedTimeAtLocation?.substring(11, 16);
  }

  function from(s: string) {
    switch (s) {
      case 'Tu':
        return 'Tumba';
      case 'Khä':
        return 'Kallhäll';
      default:
        return s;
    }
  }

  function to(a) {
    return a.map(({ LocationName }) => from(LocationName));
  }
</script>

<div>
  {#each announcements as { AdvertisedTrainIdent, AdvertisedTimeAtLocation, TimeAtLocation, Canceled, LocationSignature, ToLocation }}
    {#if Canceled}
      <div>
        {AdvertisedTrainIdent}
        {hhmm(AdvertisedTimeAtLocation)} från {from(LocationSignature)} till {to(
          ToLocation
        )}
        är inställt
      </div>
    {:else if TimeAtLocation}
      <div>
        {AdvertisedTrainIdent}
        {hhmm(AdvertisedTimeAtLocation)} från {from(LocationSignature)} till {to(
          ToLocation
        )}
        gick {hhmm(TimeAtLocation)}
      </div>
    {:else}
      <div>
        {AdvertisedTrainIdent}
        {hhmm(AdvertisedTimeAtLocation)} från {from(LocationSignature)} till {to(
          ToLocation
        )}
        ska gå som vanligt
      </div>
    {/if}
  {/each}
</div>
